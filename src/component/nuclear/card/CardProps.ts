import { MovieDetail } from "src/page/movie-data.model";

export  interface ImageCardProps {
    movieData: MovieDetail;
    text?: string;
    height?: string;
    onSelect?:any;
}

export interface ScrollableCardListProps {
    items: MovieDetail[];
    height?: string;
    heading: string;
    subheading?: string;
    onSelect?:any;
  }

export interface MoviePromoCardProps {
    title?: string ;
    description?: string ;
    stats?: {
        users: string;
        rating: string;
        activeUsers: string;
        userRating: string;
    } ;
    buttons?: {
        learnMoreText: string;
        getStartedText: string;
    } ;
    imageUrl?: string ;
}