import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock } from "lucide-react";
import { ReactNode } from "react";

type CardComponentsProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
  iconSrc?: string;
  list1?: string;
  list2?: string;
  list3?: string;
};


const CardComponents = ({ title, description, iconSrc, list1, list2, list3 }: CardComponentsProps) => {
  return (
    <Card>
      <CardHeader>
        {iconSrc === "BookOpen" 
          ? <BookOpen className="h-10 w-10 text-blue-600" /> 
            : <Clock className="h-10 w-10 text-blue-600" />}
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {list1}
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {list2}
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {list3}
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default CardComponents;