import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useState, useEffect} from "react";

type Language = {
  name: string;
}; 

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language[]>([]);
    
    useEffect(() => {
        const LanguageDb = async () => {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSelectedLanguage(data)
                return data;
            } catch (err) {
                 console.error("Failed to fetch languages:", err);
            }
        }

        LanguageDb();
    }, [])
  return (
    <Select>
        <SelectTrigger className="w-[280px] m-auto mt-5">
            <SelectValue placeholder="Select a Language" />
        </SelectTrigger>
        <SelectContent side="bottom">
            {
                selectedLanguage.map((lang) => {
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