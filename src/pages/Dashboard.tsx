import { motion } from "framer-motion";
import { useDashboardAnimation } from "@/hooks/useDashboard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardCards from "@/components/dashboard/DashboardCards";
import { WhyPitchPro } from "@/components/dashboard/WhyPitchPro";

export default function Dashboard() {
  const { container, item } = useDashboardAnimation();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12"
    >
      <DashboardHeader item={item} />
      <DashboardCards container={container} />
      <WhyPitchPro item={item} />
    </motion.div>
  );
}
