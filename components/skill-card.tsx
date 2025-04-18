import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

export default function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center">
          <div className="mr-3 rounded-full bg-gray-100 p-2">{icon}</div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
