import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useState, useEffect} from "react";

type Language = {
  title: string;
};

type LanguageProps = {
    value: string | null;
    onValueChange: (value: string) => void;
}

const LanguageSelector = ({onValueChange}: LanguageProps) => {
    const [languages, setLanguages] = useState<Language[]>([])
    
    useEffect(() => {
        const LanguageDb = async () => {
            try {
                const response = await fetch(
                    '/db.json'
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setLanguages(data)
            } catch (err) {
                console.error("Failed to fetch languages:", err);
            }
        }
        LanguageDb();
    }, [])

    
  return (
    <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-11/12 m-auto mt-5">
            <SelectValue 
                placeholder={"Select a Language"}
            />
        </SelectTrigger>
        <SelectContent side="bottom">
            {
                languages.map((lang) => {
                    return (
                        <SelectItem key={lang.title} value={lang.title}>
                            {lang.title}
                        </SelectItem>
                    )
                })
            }
        </SelectContent>
    </Select>
  )
}

export default LanguageSelector