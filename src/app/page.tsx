import { CV, CV_JSON } from "@/features/CV";
import { Metadata } from "next/types";
import schema from "../../schema.json";

export const metadata: Metadata = {
  title: `${schema.name} ${schema.familyName}`,
  description: `${schema.name} ${schema.familyName} - Professional portfolio and CV`,
  authors: [
    {
      name: `${schema.name} ${schema.familyName}`,
      url: schema.contact_information.github,
    },
  ],
};

export default function Home() {
  return <CV schema={schema as CV_JSON} />;
}
