import ReviewsContent from "./ReviewsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customer Reviews | Rated 5-Stars for Aluminum Railings in GTA",
    description: "See what homeowners in Toronto, Mississauga, and Oakville are saying about Aluminum Solutions. We pride ourselves on quality and service.",
    openGraph: {
        title: "Customer Reviews | Rated 5-Stars for Aluminum Railings in GTA",
        description: "See what homeowners in Toronto, Mississauga, and Oakville are saying about Aluminum Solutions. We pride ourselves on quality and service.",
    },
};

export default function ReviewsPage() {
    return <ReviewsContent />;
}
