'use client'

import { buttonVariants } from '@/components/ui/button'
import { File, Folder, Home, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FileType = { name: string; folder: FileType[] }

const folders: FileType[] = [
  {
    name: 'My Folder',
    folder: [
      {
        name: 'Downloads',
        folder: [
          {
            name: 'Assets',
            folder: [
              {
                name: 'background.img',
                folder: [],
              },
              {
                name: 'banner.img',
                folder: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Documents',
        folder: [
          {
            name: 'password.txt',
            folder: [],
          },
        ],
      },
    ],
  },
]

const page = () => {
  return (
    <div className="starter">
      <Link
        href="/"
        className={buttonVariants({
          variant: 'outline',
          size: 'icon',
          className: 'top-4 left-4 absolute',
        })}
      >
        <Home />
      </Link>

      <div className="flex flex-col gap-4 min-w-full md:min-w-[320px] bg-neutral-950 p-8 rounded-lg">
        <h1 className="text-xl font-semibold mb-4">Typescript Playground</h1>
        {folders.map((item, i) => (
          <Files key={i} file={item} />
        ))}
      </div>
    </div>
  )
}

const Files = ({ file }: { file: FileType }) => {
  const [isOpen, setIsOpen] = useState(false)
  const containsFolders = file.folder.length > 0
  const Icon = containsFolders ? Folder : File
  const iconColor = containsFolders ? 'text-yellow-400' : 'text-indigo-600'
  return (
    <Accordion type="multiple">
      <AccordionItem value={file.name}>
        <AccordionTrigger className="flex items-center gap-2" onClick={() => setIsOpen((prev) => !prev)}>
          {containsFolders && <ChevronDown className={`transition-all duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`} />}
          <Icon className={iconColor} />
          <p>{file.name}</p>
        </AccordionTrigger>
        <AccordionContent className="ml-3 pl-4 border-l border-neutral-500">
          {file.folder?.map((item, i) => (
            <Files key={i} file={item} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default page
