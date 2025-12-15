import { faker } from "@faker-js/faker";
import { RiStarFill } from "@remixicon/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CustomerReviewCard({ description }: { description: string }) {
  const name = faker.person.fullName();
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <RiStarFill
              key={index.toString()}
              className="size-3 text-primary"
            />
          ))}
        </div>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={faker.image.personPortrait()} />
            <AvatarFallback>
              {faker.person.firstName().charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-medium text-sm">{name}</p>
            <p className="text-muted-foreground text-sm">
              @{faker.internet.username()}
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
