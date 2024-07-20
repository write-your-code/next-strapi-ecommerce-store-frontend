import { HeadingSkeleton, LinesSkeleton } from "@/components/Skeletons";
import Wrapper from "@/components/Wrapper";

const Loading = () => {
  return (
    <Wrapper className="py-2">
      <HeadingSkeleton />
      <div className="flex">
        <div className="w-3/4">
          <LinesSkeleton size={6} />
        </div>
        <div className="w-1/4">
          <LinesSkeleton size={6} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Loading;
