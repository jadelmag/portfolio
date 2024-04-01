import { INITIAL_YEAR } from "@/constants/workingyears.constants";

export const calculateYearsWorked = (): number => {
  const currentYear = new Date().getFullYear();
  const yearsWorked = currentYear - INITIAL_YEAR;
  return yearsWorked;
};
