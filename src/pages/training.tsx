import { useUser } from "@clerk/nextjs";
import { NextPage } from "next";
import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

type TrainingWithUser = RouterOutputs["training"]["getAll"][number];

const TrainingList: NextPage = () => {
  const { data, isLoading } = api.training.getAll.useQuery();

  const userSession = useUser();

  return (
    <div className="w-full justify-center p-3 md:w-1/2">
      {!isLoading && (
        <li className="grid list-none gap-5">
          {data?.map((item: TrainingWithUser) => (
            <ul
              className="flex cursor-pointer items-center gap-3 border-b-2 p-2"
              key={item.id}
            >
              <Image
                className="w-10 rounded-full"
                alt={item.id}
                src={userSession.user?.imageUrl ?? ""}
                width={56}
                height={56}
              ></Image>
              <div>
                <div>
                  {`${item.autor?.firstName ?? ""} ${
                    item.autor?.lastName ?? ""
                  }`}
                </div>
                <div className="text-sm font-thin">{`• ${dayjs(
                  item.createdAt
                ).fromNow()}`}</div>
              </div>
            </ul>
          ))}
        </li>
      )}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default TrainingList;
