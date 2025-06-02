import {
  Card,
//   CardAction,
//   CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { RiGitForkFill } from "react-icons/ri";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { useState, useEffect } from "react"

interface propType {
    selectedLanguage: string
}

type repo = {
    id: number,
    name: string,
    description: string,
    language: string,
    stargazers_count: number,
    forks_count: number,
    open_issues_count: number
}

const GithubInfo = ({selectedLanguage}:propType) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [githubData, setGithubData] = useState<repo[]>([])
    const [githubIndex, setGithubIndex] = useState<number>(0)

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await fetch (
                    `https://api.github.com/search/repositories?q=language:${selectedLanguage}`
                )
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const data = await response.json()
                setGithubData(data.items)
                // return data
            }
            catch (error) {
                console.error("Error fetching GitHub data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchGithubData()
    }, [selectedLanguage])
    return (
        <div className="w-11/12 m-auto mt-5">
            {loading ? (
                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-3">
                    <p className="">Loading...</p>
                </div>
            ) : (
                githubData[githubIndex] && (
                    <>
                        <Card key={githubData[githubIndex].id} className="bg-white shadow-md py-3">
                            <CardHeader className="px-3">
                                <CardTitle>{githubData[githubIndex].name}</CardTitle>
                                <CardDescription className="text-sm text-gray-500 py-1">
                                    <p>{githubData[githubIndex].description}</p>
                                </CardDescription>
                                <CardFooter className="px-0">
                                    <ul className="w-full flex justify-between text-sm text-gray-600">
                                        <li className="flex items-center gap-1">
                                            <GoDotFill className="text-sm"/>
                                            {githubData[githubIndex].language}
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <FaStar className="text-sm"/>
                                            {githubData[githubIndex].stargazers_count}
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <RiGitForkFill className="text-sm"/>
                                            {githubData[githubIndex].forks_count}
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <AiOutlineIssuesClose className="text-sm"/>
                                            {githubData[githubIndex].open_issues_count}
                                        </li>
                                    </ul>
                                </CardFooter>
                            </CardHeader>
                        </Card>
                        <div className="mt-4">
                            <Button 
                                className="w-full cursor-pointer text-lg"
                                onClick={() => {
                                    setGithubIndex((prevIndex) => 
                                        prevIndex < githubData.length - 1 ? prevIndex + 1 : 0
                                    )
                                }}
                            >Refresh</Button>
                        </div>
                    </>
                )
            )}
        </div>
    )
}

export default GithubInfo