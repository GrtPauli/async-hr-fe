import UserAvatar from "../assets/images/user-avatar-32.png";
import UserImg from "../assets/images/user.png";

export const IMAGES = {
  UserAvatar,
  UserImg
};

export const APP_LINKS = {
  pages: [
    {
      title: "Dashboard",
      icon: `<path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Z" /><path d="M6.068 7.482A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />`,
      children: [
        { title: "Main", path: "/" },
        { title: "Analytics", path: "/analytics" },
        { title: "Fintech", path: "/fintech" },
      ],
    },
    {
      title: "E-Commerce",
      icon: `<path d="M9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855ZM6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4.803 8.095c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11c.474 0 .897.22 1.171.563l.013.016.013.017A1.5 1.5 0 1 1 3.5 11Z" />`,
      children: [
        { title: "Customers", path: "/ecommerce/customers" },
        { title: "Orders", path: "/ecommerce/orders" },
        { title: "Invoices", path: "/ecommerce/invoices" },
        { title: "Shop", path: "/ecommerce/shop" },
        { title: "Shop 2", path: "/ecommerce/shop-2" },
        { title: "Single Product", path: "/ecommerce/product" },
        { title: "Cart", path: "/ecommerce/cart" },
        { title: "Cart 2", path: "/ecommerce/cart-2" },
        { title: "Cart 3", path: "/ecommerce/cart-3" },
        { title: "Pay", path: "/ecommerce/pay" },
      ],
    },
    {
      title: "Community",
      icon: `<path d="M12 1a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3h2a1 1 0 1 0 0-2h-2a1 1 0 0 1-1-1V1ZM1 10a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 1 0 2 0v-2a3 3 0 0 0-3-3H1ZM5 0a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H1a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1V1a1 1 0 0 1 1-1ZM12 13a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2h-2a3 3 0 0 0-3 3v2a1 1 0 1 0 2 0v-2Z" />`,
      children: [
        { title: "Users - Tabs", path: "/community/users-tabs" },
        { title: "Users - Tiles", path: "/community/users-tiles" },
        { title: "Profile", path: "/community/profile" },
        { title: "Feed", path: "/community/feed" },
        { title: "Forum", path: "/community/forum" },
        { title: "Forum - Post", path: "/community/forum-post" },
        { title: "Meetups", path: "/community/meetups" },
        { title: "Meetups - Post", path: "/community/meetups-post" },
      ],
    },
    {
      title: "Finance",
      icon: `<path d="M6 0a6 6 0 0 0-6 6c0 1.077.304 2.062.78 2.912a1 1 0 1 0 1.745-.976A3.945 3.945 0 0 1 2 6a4 4 0 0 1 4-4c.693 0 1.344.194 1.936.525A1 1 0 1 0 8.912.779 5.944 5.944 0 0 0 6 0Z" /><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />`,
      children: [
        { title: "Cards", path: "/finance/cards" },
        { title: "Transactions", path: "/finance/transactions" },
        { title: "Transaction Details", path: "/finance/transaction-details" },
      ],
    },
    {
      title: "Job Board",
      icon: `<path d="M6.753 2.659a1 1 0 0 0-1.506-1.317L2.451 4.537l-.744-.744A1 1 0 1 0 .293 5.207l1.5 1.5a1 1 0 0 0 1.46-.048l3.5-4ZM6.753 10.659a1 1 0 1 0-1.506-1.317l-2.796 3.195-.744-.744a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.46-.049l3.5-4ZM8 4.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 11.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" />`,
      children: [
        { title: "Listing", path: "/job/listing" },
        { title: "Job Post", path: "/job/job-post" },
        { title: "Company Profile", path: "/job/company-profile" },
      ],
    },
    {
      title: "Tasks",
      icon: `<path d="M7.586 9H1a1 1 0 1 1 0-2h6.586L6.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L7.586 9ZM3.075 4.572a1 1 0 1 1-1.64-1.144 8 8 0 1 1 0 9.144 1 1 0 0 1 1.64-1.144 6 6 0 1 0 0-6.856Z" />`,
      children: [
        { title: "Kanban", path: "/tasks/kanban" },
        { title: "List", path: "/tasks/list" },
      ],
    },
    {
      title: "Settings",
      icon: `<path d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" fillRule="evenodd" />`,
      children: [
        { title: "My Account", path: "/settings/account" },
        { title: "My Notifications", path: "/settings/notifications" },
        { title: "Connected Apps", path: "/settings/apps" },
        { title: "Plans", path: "/settings/plans" },
        { title: "Billing & Invoices", path: "/settings/billing" },
        { title: "Give Feedback", path: "/settings/feedback" },
      ],
    },
    {
      title: "Utility",
      icon: `<path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM14.75 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" /><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />`,
      children: [
        { title: "Changelog", path: "/utility/changelog" },
        { title: "Roadmap", path: "/utility/roadmap" },
        { title: "FAQs", path: "/utility/faqs" },
        { title: "Empty State", path: "/utility/empty-state" },
        { title: "404", path: "/utility/404" },
      ],
    },
  ],
  more: [
    {
      title: "Authentication",
      icon: `<path d="M11.442 4.576a1 1 0 1 0-1.634-1.152L4.22 11.35 1.773 8.366A1 1 0 1 0 .227 9.634l3.281 4a1 1 0 0 0 1.59-.058l6.344-9ZM15.817 4.576a1 1 0 1 0-1.634-1.152l-5.609 7.957a1 1 0 0 0-1.347 1.453l.656.8a1 1 0 0 0 1.59-.058l6.344-9Z" />`,
      children: [
        { title: "Sign in", path: "/signin" },
        { title: "Sign up", path: "/signup" },
        { title: "Reset Password", path: "/reset-password" },
      ],
    },
    {
      title: "Onboarding",
      icon: `<path d="M6.668.714a1 1 0 0 1-.673 1.244 6.014 6.014 0 0 0-4.037 4.037 1 1 0 1 1-1.916-.571A8.014 8.014 0 0 1 5.425.041a1 1 0 0 1 1.243.673ZM7.71 4.709a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM9.995.04a1 1 0 1 0-.57 1.918 6.014 6.014 0 0 1 4.036 4.037 1 1 0 0 0 1.917-.571A8.014 8.014 0 0 0 9.995.041ZM14.705 8.75a1 1 0 0 1 .673 1.244 8.014 8.014 0 0 1-5.383 5.384 1 1 0 0 1-.57-1.917 6.014 6.014 0 0 0 4.036-4.037 1 1 0 0 1 1.244-.673ZM1.958 9.424a1 1 0 0 0-1.916.57 8.014 8.014 0 0 0 5.383 5.384 1 1 0 0 0 .57-1.917 6.014 6.014 0 0 1-4.037-4.037Z" />`,
      children: [
        { title: "Step 1", path: "/onboarding/step-1" },
        { title: "Step 2", path: "/onboarding/step-2" },
        { title: "Step 3", path: "/onboarding/step-3" },
        { title: "Step 4", path: "/onboarding/step-4" },
      ],
    },
    {
      title: "Components",
      icon: `<path d="M.06 10.003a1 1 0 0 1 1.948.455c-.019.08.01.152.078.19l5.83 3.333c.053.03.116.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.856-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />`,
      children: [
        { title: "Button", path: "/components/button" },
        { title: "Input Form", path: "/components/input-form" },
        { title: "Dropdown", path: "/components/dropdown" },
        { title: "Alert & Banner", path: "/components/alert-banner" },
        { title: "Modal", path: "/components/modal" },
        { title: "Pagination", path: "/components/pagination" },
        { title: "Tabs", path: "/components/tabs" },
        { title: "Breadcrumb", path: "/components/breadcrumb" },
        { title: "Badge", path: "/components/badge" },
        { title: "Avatar", path: "/components/avatar" },
        { title: "Tooltip", path: "/components/tooltip" },
        { title: "Accordion", path: "/components/accordion" },
        { title: "Icons", path: "/components/icons" },
      ],
    },
  ],
  singleLinks: [
    {
      title: "Messages",
      icon: `<path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l8.414-8.414a3 3 0 0 0 0-4.242L13.95.879ZM11.12 2.293a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-8.2 8.2-3.232.646.646-3.232 8.2-8.2Z" /><path d="M10 14a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" />`,
      path: "/messages",
      badge: "4",
    },
    {
      title: "Inbox",
      icon: `<path d="M11.92 6.851c.044-.027.09-.05.137-.07.481-.275.758-.68.908-1.256.126-.55.169-.81.357-2.058.075-.498.144-.91.217-1.264-4.122.75-7.087 2.984-9.12 6.284a18.087 18.087 0 0 0-1.985 4.585 17.07 17.07 0 0 0-.354 1.506c-.05.265-.076.448-.086.535a1 1 0 0 1-1.988-.226c.056-.49.209-1.312.502-2.357a20.063 20.063 0 0 1 2.208-5.09C5.31 3.226 9.306.494 14.913.004a1 1 0 0 1 .954 1.494c-.237.414-.375.993-.567 2.267-.197 1.306-.244 1.586-.392 2.235-.285 1.094-.789 1.853-1.552 2.363-.748 3.816-3.976 5.06-8.515 4.326a1 1 0 0 1 .318-1.974c2.954.477 4.918.025 5.808-1.556-.628.085-1.335.121-2.127.121a1 1 0 1 1 0-2c1.458 0 2.434-.116 3.08-.429Z" />`,
      path: "/inbox",
    },
    {
      title: "Calendar",
      icon: `<path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" /><path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" /><path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />`,
      path: "/calendar",
    },
    {
      title: "Campaigns",
      icon: `<path d="M6.649 1.018a1 1 0 0 1 .793 1.171L6.997 4.5h3.464l.517-2.689a1 1 0 1 1 1.964.378L12.498 4.5h2.422a1 1 0 0 1 0 2h-2.807l-.77 4h2.117a1 1 0 1 1 0 2h-2.501l-.517 2.689a1 1 0 1 1-1.964-.378l.444-2.311H5.46l-.517 2.689a1 1 0 1 1-1.964-.378l.444-2.311H1a1 1 0 1 1 0-2h2.807l.77-4H2.46a1 1 0 0 1 0-2h2.5l.518-2.689a1 1 0 0 1 1.17-.793ZM9.307 10.5l.77-4H6.612l-.77 4h3.464Z" />`,
      path: "/campaigns",
    },
  ],
};
