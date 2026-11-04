import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailsView } from '@/components/blog/BlogDetailsView';
import { DetailedBlogPost } from '@/app/types/blog-details';

// 1. CURATED ABUJA ARTICLE REPOSITORY
const DETAILED_POSTS_DB: Record<string, DetailedBlogPost> = {
  "weekend-in-maitama": {
    slug: "weekend-in-maitama",
    title: "A Weekend in Maitama: Where to Eat, Walk and Unwind",
    category: "Abuja Guide",
    date: "12 Oct 2026",
    readTime: "4 min to read",
    authorName: "Concierge Team",
    authorRole: "Hospitality Lead, Aurum on Missouri",
    authorAvatar: "/img/AoM-15.webp",
    coverImage: "/img/AoM-21.webp",
    sections: [
      {
        type: 'text',
        value: "Maitama is widely recognized as the serene crown jewel of Abuja. Characterized by wide, tree-lined boulevards and quiet diplomatic enclaves, it offers discerning visitors the perfect blend of metropolitan sophistication and quiet escape. When you make Aurum on Missouri your base, Abuja's finest lifestyle offerings are moments from your doorstep."
      },
      {
        type: 'heading',
        value: "Morning: A Quiet Start & Botanical Strolls"
      },
      {
        type: 'text',
        value: "Begin your Saturday with breakfast prepared to order at The Restaurant at Aurum. From freshly baked pastries to rich local delicacies, fuel your morning before taking a leisurely walk towards Millennium Park, designed by Italian architect Manfredi Nicoletti. The lush landscaped gardens and gentle fountains offer a refreshing morning retreat."
      },
      {
        type: 'quote',
        value: "Understated luxury isn't about excess; it is about effortless peace in the heart of the capital.",
        subValue: "Aurum Hospitality Note"
      },
      {
        type: 'heading',
        value: "Afternoon: Contemporary Art and Curated Spaces"
      },
      {
        type: 'text',
        value: "Abuja's arts culture is thriving. Spend an hour exploring the contemporary African paintings and sculpture at Thought Pyramid Art Centre, just a brief drive away. Afterwards, retreat back to Aurum for a tranquil afternoon in your suite, where high-speed Wi-Fi and tailored comforts await."
      },
      {
        type: 'heading',
        value: "Evening: Intimate Dining at Aurum"
      },
      {
        type: 'text',
        value: "As the sun dips across the Maitama skyline, join us at The Bar and restaurant for signature cocktails and a dinner that effortlessly balances beloved Nigerian classics with international flavours."
      }
    ]
  },

  "planning-business-trip-abuja": {
    slug: "planning-business-trip-abuja",
    title: "Planning a Business Trip to Abuja: A Practical Guide",
    category: "Business Travel",
    date: "18 Oct 2026",
    readTime: "5 min to read",
    authorName: "Concierge Team",
    authorRole: "Executive Services, Aurum on Missouri",
    authorAvatar: "/img/AoM-15.webp",
    coverImage: "/img/CONFERENCEROOM-2.webp",
    sections: [
      {
        type: 'text',
        value: "Navigating corporate summits, diplomatic engagements, or commercial partnerships in Nigeria's capital requires precision, punctuality, and an accommodation partner that respects the tempo of executive life."
      },
      {
        type: 'heading',
        value: "1. Strategic Location in Maitama"
      },
      {
        type: 'text',
        value: "Choosing accommodation in Maitama significantly cuts down transit times to ministry headquarters, embassies, and major financial centres in the Central Business District. Staying at 8 Missouri Street places you in a secure, exclusive neighbourhood away from metropolitan congestion."
      },
      {
        type: 'heading',
        value: "2. Chauffeur & Airport Logistics"
      },
      {
        type: 'text',
        value: "Nnamdi Azikiwe International Airport is approximately 45 minutes from Maitama. Arrange your private airport transfer with our front desk prior to arrival so that a dedicated chauffeur is waiting for you the moment you land."
      },
      {
        type: 'heading',
        value: "3. Private Meeting Spaces"
      },
      {
        type: 'text',
        value: "When hosting private discussions, board presentations, or interviews, our private conference boardroom offers seating for your team with an 84-inch smart display, video-conferencing technology, high-speed Wi-Fi, and tailored executive catering."
      }
    ]
  },

  "customer-service-week-at-aurum": {
    slug: "customer-service-week-at-aurum",
    title: "The Team Behind Your Stay: Customer Service Week at Aurum",
    category: "Inside Aurum",
    date: "25 Oct 2026",
    readTime: "4 min to read",
    authorName: "Management Team",
    authorRole: "Aurum on Missouri",
    authorAvatar: "/img/AoM-15.webp",
    coverImage: "/img/AoM-15.webp",
    sections: [
      {
        type: 'text',
        value: "At Aurum on Missouri, true luxury is not merely defined by premium marble, radiant suites, or architectural lines—it is brought to life every day by our dedicated hospitality team."
      },
      {
        type: 'heading',
        value: "Hospitality Delivered with Personal Care"
      },
      {
        type: 'text',
        value: "From our front desk professionals welcoming you after a long flight to our culinary crew crafting bespoke dining experiences, every team member shares one standard: making every stay feel seamless, personal, and genuinely warm."
      },
      {
        type: 'quote',
        value: "With a dedication to comfort and personal service, Aurum on Missouri makes every stay an experience in understated sophistication.",
        subValue: "The Aurum Promise"
      },
      {
        type: 'text',
        value: "We celebrate our frontline staff, culinary artisans, and housekeeping specialists who ensure that each room, each meal, and each interaction reflects the golden standard of Aurum on Missouri."
      }
    ]
  }
};

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = DETAILED_POSTS_DB[slug];

  if (!post) {
    return {
      title: 'Article Not Found | Aurum on Missouri, Maitama, Abuja',
      description: 'The requested article could not be located.'
    };
  }

  return {
    title: `${post.title} | Aurum on Missouri, Maitama, Abuja`,
    description: post.sections[0]?.value || 'Stories and insights from Aurum on Missouri, Maitama, Abuja.',
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = DETAILED_POSTS_DB[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">
      <BlogDetailsView article={post} />
    </main>
  );
}
