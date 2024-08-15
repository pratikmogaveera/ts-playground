"use client"

import { buttonVariants } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

type FrontEnd = "react" | "js" | "html" | "css"
type BackEnd = "node" | "mongodb" | "postgres" | "python"
type GenerateLink = ({ type: "frontend", value: FrontEnd } | { type: "backend", value: BackEnd })

const frontEndList: { id: FrontEnd, title: string }[] = [
    { id: "react", title: "React.Js" },
    { id: "js", title: "JavaScript" },
    { id: "html", title: "HTML" },
    { id: "css", title: "CSS" }
]

const backEndList: { id: BackEnd, title: string }[] = [
    { id: "node", title: "Node.Js" },
    { id: "mongodb", title: "MongoDB" },
    { id: "postgres", title: "Postgres" },
    { id: "python", title: "Python" }
]

const page = () => {
    const searchParams = useSearchParams()
    const selectedFront = searchParams.get('frontend') as FrontEnd || "react"
    const selectedBack = searchParams.get('backend') as BackEnd || "node"

    const generateLink = ({ type, value }: GenerateLink) => {
        if (type === "frontend") {
            return `?frontend=${selectedFront === value ? null : value}&backend=${selectedBack}`
        } else {
            return `?frontend=${selectedFront}&backend=${selectedBack === value ? null : value}`
        }
    }

    return (
        <div className="starter bg-background">
            <div className="absolute top-4 left-4 flex gap-4">
                <Link href="/" className={buttonVariants({ variant: "outline", size: "icon" })}><Home /></Link>
                <Link href="/state-in-url/server" className={buttonVariants({ variant: "outline", size: "icon" })}>Server</Link>
            </div>
            <div className="flex flex-col gap-8 rounded-lg bg-muted/20 p-8">
                <div className="flex gap-4 justify-center">
                    {frontEndList.map(item => (
                        <Link replace href={generateLink({ type: "frontend", value: item.id })} key={item.id} className={buttonVariants({ variant: selectedFront === item.id ? "default" : "secondary" })}>
                            <span className="font-bold">{item.title}</span>
                        </Link>)
                    )}

                </div>
                <div className="flex gap-4 justify-center">
                    {backEndList.map(item =>
                        <Link replace href={generateLink({ type: "backend", value: item.id })} key={item.id} className={buttonVariants({ variant: selectedBack === item.id ? "default" : "secondary" })}>
                            <span className="font-bold">{item.title}</span>
                        </Link>
                    )}
                </div>
            </div >
        </div >
    )
}

export default page