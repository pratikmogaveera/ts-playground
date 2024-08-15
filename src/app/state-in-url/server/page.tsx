import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type LangType = { id: string, name: string }
type SearchParams = { [key: string]: string | string[] | undefined }

const page = ({ searchParams }: { searchParams: SearchParams }) => {
    const languages: LangType[] = [
        { id: "python", name: "Python" },
        { id: "typescript", name: "TypeScript" },
        { id: "javascript", name: "JavaScript" },
        { id: "html", name: "HTML" },
        { id: "css", name: "CSS" },
    ]

    const langsInURL: string = Array.isArray(searchParams['languages'])
        ? (searchParams['languages'] as string[]).join(" ")
        : searchParams['languages'] || ""
    const selectedLanguages: string[] = langsInURL.split(" ")

    const getLink = (lang: string): string => {
        let link = ""
        if (selectedLanguages.includes(lang))
            link = selectedLanguages.filter((l: string) => l !== lang).join("%20")
        else
            link = [...selectedLanguages, lang].join("%20")
        return link
    }

    return (
        <div className='starter bg-background'>
            <Link href="/state-in-url" className={buttonVariants({ variant: "outline", size: "icon", className: "absolute top-4 left-4 flex gap-4" })}><ArrowLeft /></Link>

            < div className="flex gap-6 bg-muted/20 p-8 rounded font-bold" >
                {
                    languages.map((lang: LangType) =>
                        <Link
                            href={`?languages=${getLink(lang.id)}`}
                            replace
                            key={lang.id}
                            className={buttonVariants({ variant: selectedLanguages.includes(lang.id) ? "default" : "secondary" })}
                        >
                            {lang.name}
                        </Link>)
                }
            </div>
        </div >
    )
}

export default page