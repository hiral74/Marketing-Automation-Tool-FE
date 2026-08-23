// Mock data 

export const roles = [
  { roleId: 1, roleName: "Administrator", permissions: ["*"] },
  { roleId: 2, roleName: "Marketing Manager", permissions: ["campaign:*", "post:*", "blog:*", "newsletter:*"] },
  { roleId: 3, roleName: "Content Creator", permissions: ["blog:write", "post:write"] },
  { roleId: 4, roleName: "Designer", permissions: ["asset:*"] },
  { roleId: 5, roleName: "Viewer", permissions: ["*:read"] },
];

export const users = [
  { userId: 1, name: "Priya Menon", email: "priya.menon@company.com", roleId: 1, status: "Active", lastActiveAt: "now", initials: "PM" },
  { userId: 2, name: "Devika Rao", email: "devika.rao@company.com", roleId: 2, status: "Active", lastActiveAt: "1h ago", initials: "DR" },
  { userId: 3, name: "Arjun Nair", email: "arjun.nair@company.com", roleId: 3, status: "Active", lastActiveAt: "3h ago", initials: "AN" },
  { userId: 4, name: "Sana Iyer", email: "sana.iyer@company.com", roleId: 4, status: "Active", lastActiveAt: "1d ago", initials: "SI" },
  { userId: 5, name: "Rohan Das", email: "rohan.das@company.com", roleId: 5, status: "Invited", lastActiveAt: "\u2013", initials: "RD" },
];

export const campaigns = [
  { campaignId: 1, name: "Autumn Product Launch", startDate: "2026-09-01", endDate: "2026-10-15", status: "Active", ownerId: 1, linkedAssets: 18, progress: 62, tint: "brand" },
  { campaignId: 2, name: "Year-End Customer Stories", startDate: "2026-11-10", endDate: "2026-12-20", status: "Planning", ownerId: 2, linkedAssets: 5, progress: 20, tint: "mint" },
  { campaignId: 3, name: "Diwali Collection Push", startDate: "2026-10-05", endDate: "2026-10-25", status: "Completed", ownerId: 2, linkedAssets: 24, progress: 100, tint: "rose" },
  { campaignId: 4, name: "Brand Refresh 2026", startDate: "2026-08-01", endDate: "2026-12-31", status: "Active", ownerId: 4, linkedAssets: 41, progress: 44, tint: "amber" },
  { campaignId: 5, name: "Webinar Series \u2014 Growth Ops", startDate: "2026-09-15", endDate: "2026-11-01", status: "Active", ownerId: 3, linkedAssets: 9, progress: 78, tint: "brand" },
];

export const blogs = [
  { blogId: 1, title: "5 Ways AI Is Changing B2B Marketing", campaign: "Autumn Launch", authorId: 3, author: "Arjun Nair", status: "In review", updatedAt: "2h ago" },
  { blogId: 2, title: "Behind the Brand: Our 2026 Refresh", campaign: "Brand Refresh", authorId: 2, author: "Devika Rao", status: "Draft", updatedAt: "1d ago" },
  { blogId: 3, title: "Customer Spotlight: Meridian Foods", campaign: "Year-End Stories", authorId: 5, author: "Rohan Das", status: "Published", updatedAt: "3d ago" },
  { blogId: 4, title: "Diwali Gifting Guide 2026", campaign: "Diwali Push", authorId: 4, author: "Sana Iyer", status: "Published", updatedAt: "6d ago" },
  { blogId: 5, title: "How We Run Growth Ops Webinars", campaign: "Webinar Series", authorId: 3, author: "Arjun Nair", status: "Draft", updatedAt: "1w ago" },
];

export const newsletters = [
  { newsletterId: 1, subject: "October Product Digest", segment: "All subscribers", scheduleAt: "Oct 08, 2026 \u00b7 9:00 AM", deliveryStatus: "Scheduled" },
  { newsletterId: 2, subject: "Partner Spotlight \u2014 November", segment: "Partners", scheduleAt: "Nov 03, 2026 \u00b7 8:30 AM", deliveryStatus: "Pending review" },
  { newsletterId: 3, subject: "Webinar Reminder: Growth Ops", segment: "Registrants", scheduleAt: "Sep 20, 2026 \u00b7 7:00 AM", deliveryStatus: "Draft" },
  { newsletterId: 4, subject: "September Recap", segment: "All subscribers", scheduleAt: "Sep 01, 2026 \u00b7 9:00 AM", deliveryStatus: "Delivered" },
];

export const socialPosts = [
  { postId: 1, campaignId: 1, platform: "LinkedIn", content: "Q3 milestone announcement", status: "Published", scheduledAt: "Published Aug 03", metrics: { likes: 842, comments: 96, shares: 54 } },
  { postId: 2, campaignId: 3, platform: "Instagram", content: "Diwali collection carousel", status: "Awaiting review", scheduledAt: "Pending approval" },
  { postId: 3, campaignId: 5, platform: "LinkedIn", content: "Hiring: Senior Growth Marketer", status: "Scheduled", scheduledAt: "Scheduled Aug 12, 10:00 AM" },
  { postId: 4, campaignId: 4, platform: "Instagram", content: "Behind the scenes \u2014 brand shoot", status: "Published", scheduledAt: "Published Jul 29", metrics: { likes: 1200, comments: 88 } },
];

export const digitalAssets = [
  { assetId: 1, fileName: "hero-autumn-01.png", fileType: "image", size: "4.2 MB", campaign: "Autumn Launch" },
  { assetId: 2, fileName: "diwali-teaser.mp4", fileType: "video", size: "18 MB", campaign: "Diwali Push" },
  { assetId: 3, fileName: "brand-guidelines-v3.pdf", fileType: "document", size: "2.1 MB", campaign: "Brand Kit" },
  { assetId: 4, fileName: "webinar-banner.png", fileType: "image", size: "1.4 MB", campaign: "Growth Ops" },
  { assetId: 5, fileName: "logo-lockup-dark.svg", fileType: "image", size: "84 KB", campaign: "Brand Kit" },
  { assetId: 6, fileName: "bts-shoot-reel.mp4", fileType: "video", size: "26 MB", campaign: "Brand Refresh" },
  { assetId: 7, fileName: "customer-story-meridian.docx", fileType: "document", size: "640 KB", campaign: "Year-End Stories" },
];

export const notifications = [
  { notificationId: 1, type: "approval", message: '"5 Ways AI Is Changing B2B Marketing" is awaiting your approval', createdAt: "2 hours ago", isRead: false },
  { notificationId: 2, type: "success", message: '"October Product Digest" newsletter successfully scheduled', createdAt: "Yesterday, 4:12 PM", isRead: false },
  { notificationId: 3, type: "alert", message: 'Instagram carousel "Diwali collection" needs review before Oct 05', createdAt: "Yesterday, 11:03 AM", isRead: false },
  { notificationId: 4, type: "info", message: 'You were added to campaign "Year-End Customer Stories"', createdAt: "2 days ago", isRead: false },
  { notificationId: 5, type: "system", message: "System maintenance scheduled for Aug 10, 1:00\u20132:00 AM IST", createdAt: "3 days ago", isRead: true },
];

export const auditLog = [
  { logId: 1, action: "Role changed: Rohan Das \u2192 Viewer", user: "Priya Menon", timestamp: "Aug 04, 2026 4:02 PM" },
  { logId: 2, action: 'Campaign deleted (soft): "Spring Promo 2025"', user: "Priya Menon", timestamp: "Aug 02, 2026 10:15 AM" },
  { logId: 3, action: 'Blog published: "Customer Spotlight: Meridian Foods"', user: "Rohan Das", timestamp: "Aug 02, 2026 9:47 AM" },
];

export const analyticsRecords = {
  totalReach: "184K",
  engagementRate: "4.8%",
  newsletterOpenRate: "31.4%",
  contentPublished: 96,
  engagementByCampaign: [
    { campaign: "Autumn", value: 78 },
    { campaign: "Year-End", value: 45 },
    { campaign: "Diwali", value: 90 },
    { campaign: "Brand", value: 60 },
    { campaign: "Webinar", value: 70 },
    { campaign: "Q2 Recap", value: 58 },
  ],
  topPerformingContent: [
    { title: "Q3 milestone announcement", meta: "LinkedIn \u00b7 842 reactions" },
    { title: "Diwali Gifting Guide 2026", meta: "Blog \u00b7 12.4K reads" },
    { title: "Behind the scenes \u2014 brand shoot", meta: "Instagram \u00b7 1.2K likes" },
    { title: "September Recap", meta: "Newsletter \u00b7 34% open rate" },
  ],
};

export const contentPulse = [
  { day: 5, type: "post" }, { day: 6, type: "blog" }, { day: 7, type: "none" },
  { day: 8, type: "newsletter" }, { day: 9, type: "social" }, { day: 10, type: "post" },
  { day: 11, type: "none" }, { day: 12, type: "blog" }, { day: 13, type: "social" },
  { day: 14, type: "post" }, { day: 15, type: "none" }, { day: 16, type: "newsletter" },
  { day: 17, type: "social" }, { day: 18, type: "post" },
];

export const calendarEvents = {
  3: [{ label: "Launch teaser \u2014 LI", tint: "brand" }],
  5: [{ label: "Behind the Brand", tint: "amber" }],
  6: [{ label: "IG: Diwali carousel", tint: "rose" }, { label: "Oct Digest", tint: "mint" }],
  9: [{ label: "LI: Hiring post", tint: "rose" }],
  12: [{ label: "Webinar promo", tint: "brand" }],
  15: [{ label: "Growth Ops recap", tint: "amber" }, { label: "IG: BTS reel", tint: "rose" }],
  19: [{ label: "Partner Spotlight", tint: "mint" }],
  22: [{ label: "Final push \u2014 LI", tint: "brand" }],
  27: [{ label: "IG: Product teaser", tint: "rose" }],
};

export const recentActivity = [
  { icon: "campaign", text: '"Autumn Product Launch" campaign created', meta: "Priya Menon \u00b7 2 hours ago", tag: "Campaign", tint: "brand" },
  { icon: "blog", text: '"5 Ways AI Is Changing B2B Marketing" submitted for review', meta: "Arjun Nair \u00b7 4 hours ago", tag: "Pending", tint: "amber" },
  { icon: "social", text: "LinkedIn post \u2014 Q3 milestone announcement \u2014 published", meta: "Sana Iyer \u00b7 yesterday", tag: "Published", tint: "mint" },
  { icon: "newsletter", text: '"October Product Digest" newsletter scheduled', meta: "Priya Menon \u00b7 yesterday", tag: "Newsletter", tint: "brand" },
  { icon: "asset", text: "14 new assets uploaded to Brand Refresh 2026", meta: "Devika Rao \u00b7 2 days ago", tag: "Asset", tint: "amber" },
];

export const awaitingApproval = [
  { icon: "blog", text: 'Blog: "5 Ways AI Is Changing B2B Marketing"', meta: "Arjun Nair \u00b7 blog" },
  { icon: "social", text: "Instagram carousel \u2014 Diwali collection", meta: "Sana Iyer \u00b7 social" },
  { icon: "newsletter", text: 'Newsletter: "Partner Spotlight \u2014 November"', meta: "Rohan Das \u00b7 newsletter" },
  { icon: "campaign", text: 'Campaign brief: "Year-End Customer Stories"', meta: "Devika Rao \u00b7 campaign" },
];
