import Link from "next/link";
import { VideoIcon, BanIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/empty-state";

interface Props {
  meetingId: string;
  onCancelMeeting: () => void;
  isCancelling: boolean;
}

export const UpcomingState = ({
  meetingId,
  onCancelMeeting,
  isCancelling,
}: Props) => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/upcoming.svg"
        title="Not started yet"
        description="Once you start this meeting, a summary will appear here"
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full">
        <Button
          variant="secondary" // or "destructive" if you want red
          className="w-full lg:w-auto flex items-center gap-x-2"
          onClick={onCancelMeeting}
          disabled={isCancelling}
        >
          <BanIcon className="h-4 w-4" />
          Cancel meeting
        </Button>
        <Button
          disabled={isCancelling}
          asChild
          className="w-full lg:w-auto flex items-center gap-x-2"
        >
          <Link href={`/call/${meetingId}`}>
            <VideoIcon className="h-4 w-4" />
            Start meeting
          </Link>
        </Button>
      </div>
    </div>
  );
};