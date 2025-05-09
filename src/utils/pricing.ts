// Pricing constants
export const START_PLAN_PRICE = 20; // $20 for first staff member on Start plan
export const PRO_PLAN_PRICE = 30;   // $30 for first staff member on Pro plan
export const START_EXTRA_STAFF_PRICE = 3; // $3 per additional staff for Start plan
export const PRO_EXTRA_STAFF_PRICE = 5;   // $5 per additional staff for Pro plan
export const ANNUAL_DISCOUNT = 0.8;  // 20% discount
export const MAX_STAFF_COUNT = 14;

export function calculateTotalPrice(staffCount: number, planType: 'start' | 'pro'): number {
  if (staffCount <= 0) return 0;
  if (staffCount > MAX_STAFF_COUNT) return 0; // Trigger "Let's Talk"
  
  const basePrice = planType === 'start' ? START_PLAN_PRICE : PRO_PLAN_PRICE;
  const extraStaffPrice = planType === 'start' ? START_EXTRA_STAFF_PRICE : PRO_EXTRA_STAFF_PRICE;
  const extraStaffCount = Math.max(0, staffCount - 1);
  
  return Math.ceil(basePrice + (extraStaffCount * extraStaffPrice));
}

export function calculateAnnualPrice(monthlyPrice: number): number {
  return Math.ceil(monthlyPrice * ANNUAL_DISCOUNT);
}

export function formatPrice(price: number | null): string {
  if (price === null) return "Let's Talk";
  if (price === 0) return 'Free';
  return `$${Math.ceil(price)}`;
}