export default function ActivityItem({ activity }) {
  const jsDate = new Date(activity.date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const stringDate = jsDate.toLocaleDateString("en-US", options);

  return (
    <li className="border-b flex flex-row flex-wrap justify-between py-2 w-96 ">
      <p className="font-semibold">{activity.activity}</p>
      <p className="italic">{stringDate}</p>
    </li>
  );
}
