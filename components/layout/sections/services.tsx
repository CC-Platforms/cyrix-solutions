import { ProService, serviceList } from "@/@data/services";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeader from "../section-header";
import SectionContainer from "../section-container";

export const ServicesSection = () => {
  return (
    <SectionContainer id="solutions">
      <SectionHeader
        subTitle="Our Services"
        title="Grow Your Business with Cyrix Tech Solutions"
        description="From custom websites to advanced web apps, our expert solutions drive growth, enhance efficiency, and elevate your brand."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-screen-lg mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card key={title} className="bg-muted h-full relative">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};