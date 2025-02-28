import useSWR from "swr";
import moment from "moment";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect, useState } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.text());

const Countdown: React.FC<{}> = () => {
  const { data: remainingTime } = useSWR("/api/remain", fetcher);
  const remain = remainingTime ? parseInt(remainingTime) : 0;

  return (
    <div className="container relative flex flex-col items-center justify-center py-6 md:flex-row md:py-12">
      <div className="text-2xl font-bold text-primary md:text-4xl">فقط</div>
      <div className="my-4 flex space-x-1 space-x-reverse sm:space-x-3 sm:space-x-reverse md:my-0 md:mx-8">
        <CountdownTimer remain={remain} />
      </div>
      <div className="flex flex-col text-center md:text-right">
        <div className="text-2xl leading-9 text-gray-400">تا شروع اولین</div>
        <div className="text-2xl font-medium leading-9 text-gray-500">
          {"همایش "}
          <span className="text-primary">فرانت‌اند</span>
          {" کشور"}
        </div>
      </div>
    </div>
  );
};

const CountdownTimer: React.FC<{ remain: number }> = ({ remain: rawRemain }) => {
  const [remain, setRemain] = useState(0);
  const duration = moment.duration(remain);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!remain) return;
      setRemain((remain) => remain - 1000);
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (!rawRemain) return;
    setRemain(rawRemain);
  }, [rawRemain]);

  return (
    <>
      <SingleTime value={duration.seconds()} label="ثانیه" />
      <Divider />
      <SingleTime value={duration.minutes()} label="دقیقه" />
      <Divider />
      <SingleTime value={duration.hours()} label="ساعت" />
      <Divider />
      <SingleTime value={duration.days()} label="روز" />
    </>
  );
};

const SingleTime: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  return (
    <div>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-[#fbdede] bg-gradient-to-tl from-[#ff8d27] to-[#e54404]">
        <div className="text-2rem font-black leading-none text-white">
          {digitsEnToFa(Math.max(0, value))}
        </div>
      </div>
      <div className="mt-[6px] text-center text-lg font-medium text-gray-500">{label}</div>
    </div>
  );
};

const Divider: React.FC<{}> = () => {
  return (
    <div className="flex h-16 items-center text-2xl font-bold leading-9 text-[#ea5b5b]">:</div>
  );
};

export default Countdown;
