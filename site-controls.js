(() => {
  const supportedLanguages = ["en", "vi", "ja"];
  const languageLabels = {
    en: "English",
    vi: "Tiếng Việt",
    ja: "日本語"
  };
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.painPoints": "Challenges",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.capabilities": "Advisory scenarios",
      "nav.about": "About",
      "nav.contact": "Contact",
      "controls.openNavigation": "Open navigation menu",
      "controls.chooseLanguage": "Choose language",
      "hero.badge": "IT infrastructure and information security consultant for manufacturers and SMEs",
      "hero.titleStart": "Is your IT slow, hard to manage, or",
      "hero.titleHighlight": "facing hidden security risks?",
      "hero.description": "I help businesses assess current conditions, identify risks, and build practical improvement roadmaps for networks, Wi-Fi, firewalls, Microsoft 365, servers, and data backup.",
      "hero.tagNetwork": "Network",
      "hero.tagSecurity": "Security",
      "hero.tagBackup": "Backup",
      "hero.tagM365": "Microsoft 365",
      "hero.tagManagement": "IT Management",
      "hero.bookConsultation": "Share your current setup for initial advice",
      "hero.chatZalo": "Chat on Zalo",
      "painPoints.kicker": "Common challenges",
      "painPoints.title": "Is your business experiencing these IT challenges?",
      "painPoints.description": "Common warning signs that enterprise IT infrastructure is insecure, unstable, or incurring unnecessary operational waste.",
      "painPoints.item1": "Network and Wi-Fi performance is slow, unstable, or unable to support current demand.",
      "painPoints.item2": "Connected devices and internal network traffic are difficult to monitor and control.",
      "painPoints.item3": "Office, server, camera, production, and guest networks are not separated.",
      "painPoints.item4": "Firewall rules, user accounts, and access permissions are not reviewed regularly.",
      "painPoints.item5": "Critical data lacks a documented backup and recovery testing process.",
      "painPoints.item6": "Hardware, software, and licenses are purchased without independent technical review.",
      "painPoints.calloutText": "I help businesses assess current infrastructure and build a prioritized, actionable improvement plan.",
      "painPoints.calloutCta": "Share your current setup for initial advice",
      "services.kicker": "Services",
      "services.title": "IT solutions aligned with operational needs",
      "services.description": "Four focused service areas help businesses understand their current position, reduce risk, and make informed technology investments.",
      "services.viewDetails": "View service details",
      "services.receive": "What you receive",
      "process.kicker": "Working process",
      "process.title": "Transparent advisory and delivery process",
      "process.description": "A planned approach with flexible after-hours availability and a focus on minimizing disruption to daily operations.",
      "process.step1Title": "Initial discovery and assessment",
      "process.step1Desc": "Understand business needs, user headcount, current network state, and information security risks.",
      "process.step2Title": "Solution design and budget plan",
      "process.step2Desc": "Develop the technical approach, select specifications for actual demand and future growth, and prepare a transparent budget.",
      "process.step3Title": "Technical deployment and verification",
      "process.step3Desc": "Directly configure VLAN segmentation, enterprise firewall rules, bandwidth balancing, and information security policies.",
      "process.step4Title": "Handover documentation and ongoing advisory",
      "process.step4Desc": "Deliver as-built network diagrams, operational runbooks, and provide ongoing technical advisory and periodic audits.",
      "cases.kicker": "Advisory scenarios",
      "cases.title": "Approaches to common business IT challenges",
      "cases.description": "Three representative scenarios show how objectives are defined, options are evaluated, and expected business value is clarified.",
      "about.kicker": "About",
      "about.role": "IT infrastructure and information security consultant",
      "about.descriptionOne": "With more than eight years of direct experience managing, operating, and improving IT infrastructure in manufacturing environments, Nguyen The Thao turns technical issues into clear, prioritized, and budget-aligned action plans.",
      "about.descriptionTwo": "Advisory areas include business networks, information security, Microsoft 365, servers, data backup, vendor evaluation, and IT roadmaps.",
      "about.highlightOneTitle": "Aligned with operations",
      "about.highlightOneText": "Recommendations are based on user scale, system demand, risk level, and growth plans.",
      "about.highlightTwoTitle": "Independent assessment",
      "about.highlightTwoText": "Solutions and vendor quotes are reviewed against actual needs to support informed investment decisions.",
      "about.highlightThreeTitle": "Clear handover",
      "about.highlightThreeText": "Diagrams, configurations, procedures, and roadmaps are standardized for easier long-term management.",
      "about.capabilitiesKicker": "Deliverables",
      "about.capabilitiesTitle": "Capabilities demonstrated through clear outputs",
      "about.capabilitiesDescription": "Each advisory engagement produces practical documents and plans that support implementation, operations, and investment decisions.",
      "about.capabilityOneTitle": "Current state and risk",
      "about.capabilityOneText": "Current-state assessment, operational bottlenecks, and a prioritized risk matrix.",
      "about.capabilityTwoTitle": "Architecture and options",
      "about.capabilityTwoText": "Network diagrams, security designs, equipment lists, and total cost of ownership analysis.",
      "about.capabilityThreeTitle": "Operations and roadmap",
      "about.capabilityThreeText": "Administration documents, handover procedures, and 30 / 90 / 180-day improvement roadmaps.",
      "checklist.kicker": "Free resource",
      "checklist.title": "30-point business IT self-assessment checklist",
      "checklist.description": "Quickly review networks, Wi-Fi, firewalls, accounts, Microsoft 365, servers, backup, and operations before planning an investment.",
      "checklist.note": "The document includes English, Vietnamese, and Japanese.",
      "checklist.cta": "Download the free checklist",
      "contact.kicker": "Contact",
      "contact.title": "Connect to discuss the right solution",
      "contact.description": "Send me your network topology or the issues you are encountering. I will help determine the initial remediation direction.",
      "contact.infoTitle": "Contact details",
      "contact.infoDescription": "Reach out via Zalo, phone, or email. I am ready to review your current network diagram and identify initial next steps.",
      "contact.phone": "Phone & Zalo",
      "contact.email": "Email",
      "contact.region": "Service coverage",
      "contact.regionValue": "Ho Chi Minh City · Binh Duong · Dong Nai",
      "contact.zalo": "Chat on Zalo",
      "contact.quickTitle": "Quick connect",
      "contact.quickDescription": "Scan the QR code with your mobile device to quickly access the website and save contact details.",
      "contact.qrAlt": "QR code pointing to thaoit.id.vn",
      "footer.role": "IT infrastructure and information security consultant",
      "backToTop": "Back to top",
      "image.infrastructureAlt": "Illustration of server, enterprise network, and IT security infrastructure",
      "servicesPage.home": "Home",
      "servicesPage.kicker": "Consulting services",
      "servicesPage.title": "Cost-effective network and information security solutions",
      "servicesPage.description": "Enhance data security, mitigate operational risks, and strengthen disaster recovery capabilities.",
      "servicesPage.entryService": "Starting service",
      "servicesPage.healthCheckTitle": "Business IT Health Check",
      "servicesPage.healthCheckDescription": "For businesses with 20–200 staff that want to understand the current environment before planning upgrades or technology investments.",
      "servicesPage.healthCheckScope": "Assessment scope",
      "servicesPage.healthCheckScopeOne": "Network and Wi-Fi: Bandwidth, latency, coverage, roaming, and utilization",
      "servicesPage.healthCheckScopeTwo": "Firewall and security: Connection policies, network segmentation, VPN, and endpoints",
      "servicesPage.healthCheckScopeThree": "NAS, backup, and Microsoft 365: Data, the 3-2-1 principle, and account lifecycle",
      "servicesPage.healthCheckDeliverables": "Deliverables",
      "servicesPage.healthCheckDeliverableOne": "Assessment report with a prioritized risk register",
      "servicesPage.healthCheckDeliverableTwo": "Current-state network diagram and list of issues to address",
      "servicesPage.healthCheckDeliverableThree": "30 / 90 / 180-day improvement roadmap with investment recommendations",
      "servicesPage.assessmentTitle": "Enterprise network design and optimization",
      "servicesPage.assessmentDescription": "For enterprises needing to design new or upgrade existing high-capacity, reliable, and easily manageable LAN/WAN infrastructure.",
      "servicesPage.assessmentScope": "Deployment scope",
      "servicesPage.assessmentScopeOne": "Core/Access switching architecture, VLAN segmentation, and routing",
      "servicesPage.assessmentScopeTwo": "Enterprise Wi-Fi planning with seamless roaming and anti-congestion",
      "servicesPage.assessmentScopeThree": "Multi-WAN Internet load balancing and automatic connection failover",
      "servicesPage.assessmentDeliverables": "Deliverables",
      "servicesPage.assessmentDeliverableOne": "Logical and physical network topology diagrams",
      "servicesPage.assessmentDeliverableTwo": "Standardized configuration sheets for switches and access points",
      "servicesPage.assessmentDeliverableThree": "Network administration manual and incident troubleshooting runbook",
      "servicesPage.assessmentDeliverableFour": "Bandwidth throughput testing and stability validation report",
      "servicesPage.securityTitle": "Information security and data protection",
      "servicesPage.securityDescription": "Establish layered protection, access controls, and backup and recovery plans to reduce disruption and data loss risks.",
      "servicesPage.securityScope": "Deployment scope",
      "servicesPage.securityScopeOne": "Next-generation firewall, traffic policies, and intrusion detection and prevention features",
      "servicesPage.securityScopeTwo": "3-2-1 backup design and recovery testing for incidents including ransomware",
      "servicesPage.securityScopeThree": "User access control and VPN for remote work",
      "servicesPage.securityDeliverables": "Deliverables",
      "servicesPage.securityDeliverableOne": "Information security risk assessment and improvement plan",
      "servicesPage.securityDeliverableTwo": "Firewall policy and data access permission matrix",
      "servicesPage.securityDeliverableThree": "Backup architecture, centralized storage, and recovery testing procedure",
      "servicesPage.m365Title": "Microsoft 365 and data governance",
      "servicesPage.m365Description": "Structure SharePoint, OneDrive, access permissions, multi-factor authentication, and account lifecycle processes to reduce data exposure.",
      "servicesPage.m365Scope": "Consulting scope",
      "servicesPage.m365ScopeOne": "Structure collaborative file repositories and folder hierarchies on SharePoint and OneDrive",
      "servicesPage.m365ScopeTwo": "Plan multi-factor authentication and secure remote access for relevant users",
      "servicesPage.m365ScopeThree": "Standardize account provisioning, review, and revocation processes",
      "servicesPage.m365Deliverables": "Deliverables",
      "servicesPage.m365DeliverableOne": "Permission matrix documentation and secure corporate file sharing manual",
      "servicesPage.m365DeliverableTwo": "Multi-factor authentication rollout checklist and remote access policy",
      "servicesPage.m365DeliverableThree": "Standard operating procedure (SOP) for user account provisioning and revocation",
      "servicesPage.networkTitle": "Technology selection and IT cost optimization",
      "servicesPage.networkDescription": "Recommend hardware, servers, cloud services, and licenses that balance performance, scalability, and total cost of ownership.",
      "servicesPage.networkScope": "Advisory scope",
      "servicesPage.networkScopeOne": "Assess workload and usage requirements to determine appropriate specifications",
      "servicesPage.networkScopeTwo": "Independently review vendor quotes and identify nonessential costs",
      "servicesPage.networkScopeThree": "Select cloud services, business email, and license quantities for actual demand",
      "servicesPage.networkDeliverables": "Deliverables",
      "servicesPage.networkDeliverableOne": "Option comparison and total cost of ownership analysis",
      "servicesPage.networkDeliverableTwo": "Recommended equipment list aligned with scale and growth plans",
      "servicesPage.networkDeliverableThree": "Recommendations to reduce unnecessary investment based on actual needs",
      "servicesPage.managerTitle": "Fractional IT management for SMEs",
      "servicesPage.managerDescription": "For businesses that do not yet need a full-time IT Manager but require support with vendors, budgets, risks, and IT planning.",
      "servicesPage.managerScope": "Ongoing scope",
      "servicesPage.managerScopeOne": "Vendor, technical quote, budget, and software license review",
      "servicesPage.managerScopeTwo": "Technology asset tracking, periodic security review, and roadmap planning",
      "servicesPage.managerScopeThree": "Periodic management meetings and support for high-priority technical issues",
      "servicesPage.managerDeliverables": "Deliverables",
      "servicesPage.managerDeliverableOne": "Vendor quote review and technology budget recommendations",
      "servicesPage.managerDeliverableTwo": "Annual IT budget plan and system risk register",
      "servicesPage.managerDeliverableThree": "Periodic review minutes and recommendations for investment decisions"
    },
    vi: {
      "nav.home": "Trang chủ",
      "nav.painPoints": "Vấn đề thường gặp",
      "nav.services": "Dịch vụ",
      "nav.process": "Quy trình",
      "nav.capabilities": "Tình huống tư vấn",
      "nav.about": "Giới thiệu",
      "nav.contact": "Liên hệ",
      "controls.openNavigation": "Mở menu điều hướng",
      "controls.chooseLanguage": "Chọn ngôn ngữ",
      "hero.badge": "Tư vấn hạ tầng CNTT và an toàn thông tin cho doanh nghiệp sản xuất và SME",
      "hero.titleStart": "Hệ thống CNTT đang chậm, khó quản lý hoặc",
      "hero.titleHighlight": "tiềm ẩn rủi ro bảo mật?",
      "hero.description": "Tôi hỗ trợ doanh nghiệp đánh giá hiện trạng, xác định rủi ro và xây dựng lộ trình cải thiện mạng, Wi-Fi, tường lửa, Microsoft 365, máy chủ và sao lưu dữ liệu phù hợp với quy mô vận hành và ngân sách.",
      "hero.tagNetwork": "Network",
      "hero.tagSecurity": "Security",
      "hero.tagBackup": "Backup",
      "hero.tagM365": "Microsoft 365",
      "hero.tagManagement": "IT Management",
      "hero.bookConsultation": "Gửi hiện trạng để được tư vấn ban đầu",
      "hero.chatZalo": "Trao đổi nhanh qua Zalo",
      "painPoints.kicker": "Khảo sát thực trạng",
      "painPoints.title": "Doanh nghiệp của bạn có đang gặp những vấn đề này?",
      "painPoints.description": "Những dấu hiệu cảnh báo hệ thống IT đang vận hành thiếu an toàn, kém ổn định hoặc gây lãng phí ngân sách doanh nghiệp.",
      "painPoints.item1": "Mạng và Wi-Fi chậm, mất kết nối hoặc không đáp ứng số lượng người dùng.",
      "painPoints.item2": "Không kiểm soát được thiết bị và lưu lượng trong mạng nội bộ.",
      "painPoints.item3": "Mạng văn phòng, máy chủ, camera và khách chưa được phân tách.",
      "painPoints.item4": "Tường lửa, tài khoản và quyền truy cập chưa được rà soát định kỳ.",
      "painPoints.item5": "Dữ liệu quan trọng chưa có phương án sao lưu và kiểm tra phục hồi.",
      "painPoints.item6": "Thiết bị, phần mềm và giấy phép được mua theo báo giá nhưng thiếu đánh giá độc lập.",
      "painPoints.calloutText": "Tôi có thể giúp doanh nghiệp đánh giá hiện trạng và xây dựng kế hoạch cải thiện theo mức độ ưu tiên.",
      "painPoints.calloutCta": "Gửi hiện trạng để được tư vấn ban đầu",
      "services.kicker": "Dịch vụ",
      "services.title": "Giải pháp CNTT theo đúng nhu cầu vận hành",
      "services.description": "Bốn nhóm dịch vụ trọng tâm giúp doanh nghiệp nhìn rõ hiện trạng, giảm rủi ro và đầu tư có cơ sở.",
      "services.viewDetails": "Xem chi tiết dịch vụ",
      "services.receive": "Khách hàng nhận được",
      "process.kicker": "Quy trình làm việc",
      "process.title": "Quy trình tư vấn và triển khai minh bạch",
      "process.description": "Quy trình có kế hoạch, linh hoạt ngoài giờ hành chính và ưu tiên giảm thiểu ảnh hưởng đến hoạt động vận hành.",
      "process.step1Title": "Khảo sát và trao đổi sơ bộ",
      "process.step1Desc": "Lắng nghe nhu cầu thực tế, xác định quy mô người dùng, hiện trạng mạng và các rủi ro an toàn thông tin.",
      "process.step2Title": "Đề xuất giải pháp và ngân sách",
      "process.step2Desc": "Xây dựng phương án kỹ thuật, lựa chọn cấu hình phù hợp tải thực tế và lập dự toán minh bạch, có khả năng mở rộng.",
      "process.step3Title": "Triển khai kỹ thuật và đo kiểm",
      "process.step3Desc": "Trực tiếp quy hoạch VLAN, cấu hình tường lửa, tối ưu đường truyền và thiết lập chính sách an toàn thông tin.",
      "process.step4Title": "Bàn giao hồ sơ và đồng hành",
      "process.step4Desc": "Bàn giao sơ đồ mạng hoàn công, tài liệu hướng dẫn quản trị và duy trì hỗ trợ kỹ thuật định kỳ cho doanh nghiệp.",
      "cases.kicker": "Tình huống tư vấn",
      "cases.title": "Cách tiếp cận các bài toán CNTT thường gặp",
      "cases.description": "Ba tình huống tiêu biểu minh họa cách xác định mục tiêu, lựa chọn phương án và giá trị doanh nghiệp có thể đạt được.",
      "about.kicker": "Giới thiệu",
      "about.role": "Tư vấn hạ tầng CNTT và an toàn thông tin",
      "about.descriptionOne": "Với hơn 8 năm trực tiếp quản trị, vận hành và cải tiến hạ tầng CNTT trong môi trường sản xuất, Nguyễn Thế Thảo hỗ trợ doanh nghiệp chuyển các vấn đề kỹ thuật thành kế hoạch hành động rõ ràng, có thứ tự ưu tiên và phù hợp ngân sách.",
      "about.descriptionTwo": "Phạm vi tư vấn bao gồm mạng doanh nghiệp, an toàn thông tin, Microsoft 365, máy chủ, sao lưu dữ liệu, đánh giá nhà cung cấp và xây dựng lộ trình CNTT.",
      "about.highlightOneTitle": "Bám sát nhu cầu vận hành",
      "about.highlightOneText": "Đề xuất dựa trên quy mô người dùng, tải hệ thống, mức độ rủi ro và kế hoạch phát triển.",
      "about.highlightTwoTitle": "Đánh giá độc lập",
      "about.highlightTwoText": "Thẩm định phương án và báo giá theo nhu cầu thực tế, giúp doanh nghiệp có thêm cơ sở trước khi đầu tư.",
      "about.highlightThreeTitle": "Bàn giao rõ ràng",
      "about.highlightThreeText": "Chuẩn hóa sơ đồ, cấu hình, quy trình và lộ trình để hệ thống dễ tiếp nhận và quản lý lâu dài.",
      "about.capabilitiesKicker": "Sản phẩm bàn giao",
      "about.capabilitiesTitle": "Năng lực được thể hiện bằng đầu ra rõ ràng",
      "about.capabilitiesDescription": "Mỗi nội dung tư vấn được chuyển thành tài liệu và kế hoạch có thể sử dụng trong triển khai, vận hành và ra quyết định đầu tư.",
      "about.capabilityOneTitle": "Hiện trạng và rủi ro",
      "about.capabilityOneText": "Báo cáo đánh giá hiện trạng, danh sách điểm nghẽn và ma trận rủi ro theo mức độ ưu tiên.",
      "about.capabilityTwoTitle": "Kiến trúc và phương án",
      "about.capabilityTwoText": "Sơ đồ mạng, phương án bảo mật, danh mục thiết bị và phân tích tổng chi phí sở hữu.",
      "about.capabilityThreeTitle": "Vận hành và lộ trình",
      "about.capabilityThreeText": "Tài liệu quản trị, quy trình bàn giao và lộ trình cải tiến theo các mốc 30, 90 và 180 ngày.",
      "checklist.kicker": "Tài liệu miễn phí",
      "checklist.title": "Checklist 30 điểm tự đánh giá hệ thống CNTT",
      "checklist.description": "Tự rà soát nhanh mạng, Wi-Fi, tường lửa, tài khoản, Microsoft 365, máy chủ, sao lưu và quy trình vận hành trước khi quyết định đầu tư.",
      "checklist.note": "Tài liệu gồm ba ngôn ngữ: tiếng Anh, tiếng Việt và tiếng Nhật.",
      "checklist.cta": "Tải checklist miễn phí",
      "contact.kicker": "Liên hệ",
      "contact.title": "Kết nối để trao đổi giải pháp phù hợp",
      "contact.description": "Gửi cho tôi sơ đồ mạng hoặc vấn đề bạn đang gặp. Tôi sẽ giúp xác định hướng xử lý ban đầu.",
      "contact.infoTitle": "Thông tin liên hệ",
      "contact.infoDescription": "Kết nối qua Zalo, điện thoại hoặc email. Tôi sẵn sàng tiếp nhận sơ đồ mạng và giúp xác định hướng xử lý ban đầu.",
      "contact.phone": "Điện thoại và Zalo",
      "contact.email": "Thư điện tử",
      "contact.region": "Khu vực hỗ trợ",
      "contact.regionValue": "TP. Hồ Chí Minh · Bình Dương · Đồng Nai",
      "contact.zalo": "Trao đổi nhanh qua Zalo",
      "contact.quickTitle": "Kết nối nhanh",
      "contact.quickDescription": "Quét mã QR bằng thiết bị di động để truy cập nhanh website và lưu thông tin liên hệ.",
      "contact.qrAlt": "Mã QR dẫn đến thaoit.id.vn",
      "footer.role": "Tư vấn hạ tầng CNTT và an toàn thông tin",
      "backToTop": "Lên đầu trang",
      "image.infrastructureAlt": "Minh họa hệ thống máy chủ, mạng và bảo mật CNTT",
      "servicesPage.home": "Trang chủ",
      "servicesPage.kicker": "Dịch vụ tư vấn",
      "servicesPage.title": "Giải pháp mạng và an toàn thông tin tối ưu chi phí",
      "servicesPage.description": "Nâng cao mức độ an toàn dữ liệu, giảm thiểu rủi ro và tăng khả năng phục hồi sau sự cố.",
      "servicesPage.entryService": "Dịch vụ khởi đầu",
      "servicesPage.healthCheckTitle": "Đánh giá tổng thể hệ thống CNTT",
      "servicesPage.healthCheckDescription": "Phù hợp với doanh nghiệp 20–200 nhân sự muốn hiểu rõ hiện trạng trước khi quyết định nâng cấp hoặc đầu tư công nghệ.",
      "servicesPage.healthCheckScope": "Hạng mục kiểm tra",
      "servicesPage.healthCheckScopeOne": "Mạng và Wi-Fi: Băng thông, độ trễ, vùng phủ sóng, chuyển vùng và mức độ sử dụng",
      "servicesPage.healthCheckScopeTwo": "Tường lửa và bảo mật: Chính sách kết nối, phân vùng mạng, VPN và thiết bị đầu cuối",
      "servicesPage.healthCheckScopeThree": "NAS, sao lưu và Microsoft 365: Dữ liệu, nguyên tắc 3-2-1 và vòng đời tài khoản",
      "servicesPage.healthCheckDeliverables": "Khách hàng nhận được",
      "servicesPage.healthCheckDeliverableOne": "Báo cáo đánh giá kèm danh sách rủi ro theo mức độ ưu tiên",
      "servicesPage.healthCheckDeliverableTwo": "Sơ đồ mạng hiện trạng và danh sách vấn đề cần xử lý",
      "servicesPage.healthCheckDeliverableThree": "Lộ trình cải tiến 30, 90 và 180 ngày kèm khuyến nghị đầu tư",
      "servicesPage.assessmentTitle": "Thiết kế và tối ưu hệ thống mạng doanh nghiệp",
      "servicesPage.assessmentDescription": "Dành cho doanh nghiệp cần quy hoạch mới hoặc nâng cấp mạng nội bộ chịu tải cao, hoạt động ổn định và dễ quản lý.",
      "servicesPage.assessmentScope": "Nội dung triển khai",
      "servicesPage.assessmentScopeOne": "Kiến trúc mạng Core/Access switch, phân tách VLAN và định tuyến",
      "servicesPage.assessmentScopeTwo": "Quy hoạch hệ thống Wi-Fi doanh nghiệp roaming mượt mà, chống nghẽn",
      "servicesPage.assessmentScopeThree": "Đấu nối đa đường truyền Internet cân bằng tải (Load Balancing) và dự phòng",
      "servicesPage.assessmentDeliverables": "Sản phẩm bàn giao",
      "servicesPage.assessmentDeliverableOne": "Sơ đồ kiến trúc mạng logic và vật lý",
      "servicesPage.assessmentDeliverableTwo": "Cấu hình chuẩn hóa thiết bị chuyển mạch và phát sóng",
      "servicesPage.assessmentDeliverableThree": "Tài liệu quản trị mạng và quy trình xử lý sự cố kết nối",
      "servicesPage.assessmentDeliverableFour": "Biên bản đo kiểm băng thông và kiểm tra độ ổn định",
      "servicesPage.securityTitle": "An toàn thông tin và bảo vệ dữ liệu",
      "servicesPage.securityDescription": "Thiết lập các lớp bảo vệ, kiểm soát truy cập và phương án sao lưu, phục hồi nhằm giảm rủi ro gián đoạn và mất dữ liệu.",
      "servicesPage.securityScope": "Nội dung triển khai",
      "servicesPage.securityScopeOne": "Tường lửa thế hệ mới, chính sách lọc lưu lượng và các tính năng phát hiện, ngăn chặn xâm nhập",
      "servicesPage.securityScopeTwo": "Phương án sao lưu 3-2-1 và kiểm tra phục hồi khi xảy ra sự cố hoặc mã độc tống tiền",
      "servicesPage.securityScopeThree": "Kiểm soát quyền truy cập người dùng và VPN cho nhu cầu làm việc từ xa",
      "servicesPage.securityDeliverables": "Sản phẩm bàn giao",
      "servicesPage.securityDeliverableOne": "Báo cáo đánh giá rủi ro an toàn thông tin và kế hoạch cải thiện",
      "servicesPage.securityDeliverableTwo": "Chính sách tường lửa và ma trận phân quyền dữ liệu",
      "servicesPage.securityDeliverableThree": "Kiến trúc sao lưu, lưu trữ tập trung và quy trình kiểm tra phục hồi",
      "servicesPage.m365Title": "Microsoft 365 và quản trị dữ liệu",
      "servicesPage.m365Description": "Quy hoạch SharePoint, OneDrive, quyền truy cập, xác thực đa yếu tố và vòng đời tài khoản để giảm nguy cơ lộ lọt dữ liệu.",
      "servicesPage.m365Scope": "Nội dung tư vấn",
      "servicesPage.m365ScopeOne": "Quy hoạch cấu trúc thư mục dùng chung trên SharePoint và OneDrive doanh nghiệp",
      "servicesPage.m365ScopeTwo": "Lập kế hoạch xác thực đa yếu tố và truy cập từ xa cho các nhóm người dùng phù hợp",
      "servicesPage.m365ScopeThree": "Chuẩn hóa quy trình cấp phát, rà soát và thu hồi tài khoản",
      "servicesPage.m365Deliverables": "Sản phẩm bàn giao",
      "servicesPage.m365DeliverableOne": "Mô hình phân quyền dữ liệu và tài liệu hướng dẫn lưu trữ an toàn",
      "servicesPage.m365DeliverableTwo": "Kế hoạch triển khai xác thực đa yếu tố và chính sách truy cập từ xa",
      "servicesPage.m365DeliverableThree": "Quy trình chuẩn hóa bàn giao và thu hồi tài khoản khi có thay đổi nhân sự",
      "servicesPage.networkTitle": "Tư vấn thiết bị và tối ưu chi phí CNTT",
      "servicesPage.networkDescription": "Đề xuất thiết bị, máy chủ, dịch vụ đám mây và giấy phép phù hợp, cân bằng hiệu năng, khả năng mở rộng và tổng chi phí sở hữu.",
      "servicesPage.networkScope": "Nội dung tư vấn",
      "servicesPage.networkScopeOne": "Khảo sát tải và nhu cầu sử dụng để xác định cấu hình phù hợp",
      "servicesPage.networkScopeTwo": "Đánh giá độc lập báo giá kỹ thuật và các khoản chi phí chưa cần thiết",
      "servicesPage.networkScopeThree": "Lựa chọn dịch vụ đám mây, email doanh nghiệp và số lượng giấy phép theo nhu cầu",
      "servicesPage.networkDeliverables": "Sản phẩm bàn giao",
      "servicesPage.networkDeliverableOne": "Bảng so sánh phương án và phân tích tổng chi phí sở hữu",
      "servicesPage.networkDeliverableTwo": "Danh mục thiết bị đề xuất theo quy mô và kế hoạch mở rộng",
      "servicesPage.networkDeliverableThree": "Khuyến nghị giảm các khoản đầu tư dư thừa dựa trên nhu cầu thực tế",
      "servicesPage.managerTitle": "Quản lý CNTT đồng hành cho SME",
      "servicesPage.managerDescription": "Phù hợp với doanh nghiệp chưa cần IT Manager toàn thời gian nhưng cần người hỗ trợ kiểm soát nhà cung cấp, ngân sách, rủi ro và kế hoạch CNTT.",
      "servicesPage.managerScope": "Hỗ trợ định kỳ",
      "servicesPage.managerScopeOne": "Đánh giá nhà cung cấp, báo giá kỹ thuật, ngân sách và giấy phép phần mềm",
      "servicesPage.managerScopeTwo": "Theo dõi tài sản công nghệ, rà soát an toàn thông tin và xây dựng lộ trình phát triển",
      "servicesPage.managerScopeThree": "Họp định kỳ cùng ban lãnh đạo và hỗ trợ xử lý các tình huống kỹ thuật cần nâng cấp mức ưu tiên",
      "servicesPage.managerDeliverables": "Sản phẩm bàn giao",
      "servicesPage.managerDeliverableOne": "Báo cáo đánh giá báo giá và khuyến nghị ngân sách công nghệ",
      "servicesPage.managerDeliverableTwo": "Kế hoạch ngân sách CNTT năm và bảng theo dõi rủi ro hệ thống",
      "servicesPage.managerDeliverableThree": "Biên bản rà soát định kỳ và khuyến nghị cho các quyết định đầu tư"
    },
    ja: {
      "nav.home": "ホーム",
      "nav.painPoints": "現状の課題",
      "nav.services": "サービス",
      "nav.process": "進め方",
      "nav.capabilities": "相談事例",
      "nav.about": "紹介",
      "nav.contact": "お問い合わせ",
      "controls.openNavigation": "ナビゲーションを開く",
      "controls.chooseLanguage": "言語を選択",
      "hero.badge": "製造業・中小企業向け IT インフラ・情報セキュリティ顧問",
      "hero.titleStart": "社内 IT が遅い、管理困難、または",
      "hero.titleHighlight": "セキュリティリスクを抱えていませんか？",
      "hero.description": "ネットワーク、Wi-Fi、ファイアウォール、Microsoft 365、サーバー、バックアップについて、現状評価、リスク特定、実行可能な改善計画の策定を支援します。",
      "hero.tagNetwork": "Network",
      "hero.tagSecurity": "Security",
      "hero.tagBackup": "Backup",
      "hero.tagM365": "Microsoft 365",
      "hero.tagManagement": "IT Management",
      "hero.bookConsultation": "現状を共有して初期相談",
      "hero.chatZalo": "Zalo で相談",
      "painPoints.kicker": "現状の課題チェック",
      "painPoints.title": "貴社でこのような IT のお悩みはありませんか？",
      "painPoints.description": "社内 IT が不安定、セキュリティが脆弱、または不要なコストが発生している典型的な兆候です。",
      "painPoints.item1": "ネットワークや Wi-Fi が遅い、不安定、または現在の利用規模に対応できていない。",
      "painPoints.item2": "接続端末や社内ネットワーク通信を把握・管理できていない。",
      "painPoints.item3": "オフィス、サーバー、カメラ、製造、ゲスト用ネットワークが分離されていない。",
      "painPoints.item4": "ファイアウォール設定、アカウント、アクセス権限を定期的に見直していない。",
      "painPoints.item5": "重要データに文書化されたバックアップと復元テストの手順がない。",
      "painPoints.item6": "機器、ソフトウェア、ライセンスを第三者評価なしで購入している。",
      "painPoints.calloutText": "現状の徹底診断を行い、優先度に応じた段階的改善ロードマップの策定を支援します。",
      "painPoints.calloutCta": "現状を共有して初期相談",
      "services.kicker": "サービス",
      "services.title": "運用ニーズに合った IT ソリューション",
      "services.description": "4 つの重点サービスにより、現状の可視化、リスク低減、根拠ある IT 投資を支援します。",
      "services.viewDetails": "サービスの詳細を見る",
      "services.receive": "提供内容",
      "process.kicker": "進め方",
      "process.title": "透明性の高いコンサルティング手順",
      "process.description": "時間外にも柔軟に対応し、日常業務への影響を抑えることを重視した計画的な進め方です。",
      "process.step1Title": "初回ヒアリングと現状確認",
      "process.step1Desc": "利用者規模、業務フロー、既存ネットワークの課題やセキュリティリスクを正確に把握します。",
      "process.step2Title": "最適な提案と予算策定",
      "process.step2Desc": "実際の負荷と将来の拡張性に合う技術案と機器仕様を選定し、透明性の高い予算案を作成します。",
      "process.step3Title": "導入作業と品質テスト",
      "process.step3Desc": "VLAN 分割、専用ファイアウォール、通信負荷分散、情報セキュリティ基準の直接設定と検証を行います。",
      "process.step4Title": "運用引継ぎと継続サポート",
      "process.step4Desc": "完成構成図とマニュアルを納品し、定期的な点検と技術サポートを提供します。",
      "cases.kicker": "相談事例",
      "cases.title": "企業でよくある IT 課題への対応方針",
      "cases.description": "目的の整理、選択肢の評価、期待される事業価値を明確にする 3 つの代表的な事例です。",
      "about.kicker": "紹介",
      "about.role": "IT インフラ・情報セキュリティ顧問",
      "about.descriptionOne": "製造環境の IT インフラ管理・運用・改善に 8 年以上携わってきた Nguyen The Thao が、技術課題を優先順位と予算に沿った明確な行動計画へ整理します。",
      "about.descriptionTwo": "企業ネットワーク、情報セキュリティ、Microsoft 365、サーバー、データバックアップ、ベンダー評価、IT ロードマップを支援します。",
      "about.highlightOneTitle": "運用ニーズを重視",
      "about.highlightOneText": "利用者規模、システム負荷、リスク、成長計画に基づいて提案します。",
      "about.highlightTwoTitle": "独立した評価",
      "about.highlightTwoText": "実際のニーズに照らして提案と見積書を確認し、投資判断を支援します。",
      "about.highlightThreeTitle": "明確な引継ぎ",
      "about.highlightThreeText": "構成図、設定、手順、ロードマップを標準化し、長期運用を容易にします。",
      "about.capabilitiesKicker": "提供成果物",
      "about.capabilitiesTitle": "明確な成果物で示す専門性",
      "about.capabilitiesDescription": "各支援内容を、導入・運用・投資判断に活用できる文書と計画にまとめます。",
      "about.capabilityOneTitle": "現状とリスク",
      "about.capabilityOneText": "現状評価、運用上のボトルネック、優先度別リスクマトリクス。",
      "about.capabilityTwoTitle": "構成と選択肢",
      "about.capabilityTwoText": "ネットワーク構成図、セキュリティ設計、機器一覧、総保有コスト分析。",
      "about.capabilityThreeTitle": "運用とロードマップ",
      "about.capabilityThreeText": "管理資料、引継ぎ手順、30 / 90 / 180 日の改善ロードマップ。",
      "checklist.kicker": "無料資料",
      "checklist.title": "企業 IT を自己評価する 30 項目チェックリスト",
      "checklist.description": "投資計画の前に、ネットワーク、Wi-Fi、ファイアウォール、アカウント、Microsoft 365、サーバー、バックアップ、運用を確認できます。",
      "checklist.note": "英語、ベトナム語、日本語を収録しています。",
      "checklist.cta": "無料チェックリストをダウンロード",
      "contact.kicker": "お問い合わせ",
      "contact.title": "最適なソリューションについてご相談ください",
      "contact.description": "ネットワーク構成図や現状の課題をお送りいただければ、初期対応の方向性をアドバイスいたします。",
      "contact.infoTitle": "連絡先",
      "contact.infoDescription": "Zalo、電話、メールで気軽にご連絡ください。構成図の事前確認と初期対応の方向性をアドバイスします。",
      "contact.phone": "電話・Zalo",
      "contact.email": "メール",
      "contact.region": "対応エリア",
      "contact.regionValue": "ホーチミン市・ビンズオン省・ドンナイ省",
      "contact.zalo": "Zalo で相談",
      "contact.quickTitle": "クイックアクセス",
      "contact.quickDescription": "モバイル端末で QR コードを読み取り、Web サイトへのアクセスや連絡先の保存が可能です。",
      "contact.qrAlt": "thaoit.id.vn への QR コード",
      "footer.role": "IT インフラ・情報セキュリティ顧問",
      "backToTop": "トップへ戻る",
      "image.infrastructureAlt": "サーバー、ネットワーク、IT セキュリティインフラのイラスト",
      "servicesPage.home": "ホーム",
      "servicesPage.kicker": "コンサルティングサービス",
      "servicesPage.title": "最適コストで実現するネットワーク & 情報セキュリティ",
      "servicesPage.description": "データセキュリティの向上、リスクの最小化、そして障害発生時の迅速な復旧力を高めます。",
      "servicesPage.entryService": "導入サービス",
      "servicesPage.healthCheckTitle": "企業向け IT ヘルスチェック",
      "servicesPage.healthCheckDescription": "更新や技術投資を決定する前に現状を把握したい 20〜200 名規模の企業に適しています。",
      "servicesPage.healthCheckScope": "診断対象領域",
      "servicesPage.healthCheckScopeOne": "ネットワークと Wi-Fi：帯域、遅延、電波範囲、ローミング、利用状況",
      "servicesPage.healthCheckScopeTwo": "ファイアウォールとセキュリティ：通信方針、ネットワーク分離、VPN、端末",
      "servicesPage.healthCheckScopeThree": "NAS、バックアップ、Microsoft 365：データ、3-2-1 原則、アカウント管理",
      "servicesPage.healthCheckDeliverables": "提供成果物",
      "servicesPage.healthCheckDeliverableOne": "優先度別リスク一覧を含む現状評価レポート",
      "servicesPage.healthCheckDeliverableTwo": "現状ネットワーク構成図と対応課題一覧",
      "servicesPage.healthCheckDeliverableThree": "投資提案を含む 30 / 90 / 180 日改善ロードマップ",
      "servicesPage.assessmentTitle": "企業ネットワーク設計・最適化",
      "servicesPage.assessmentDescription": "高負荷に耐え、安定稼働し、管理しやすい社内 LAN/WAN 環境を新規構築または再設計します。",
      "servicesPage.assessmentScope": "支援内容",
      "servicesPage.assessmentScopeOne": "Core/Access スイッチ、VLAN 分割、ルーティング設計",
      "servicesPage.assessmentScopeTwo": "シームレスなローミングを実現する業務用 Wi-Fi の設計・最適化",
      "servicesPage.assessmentScopeThree": "複数インターネット回線の負荷分散 (Load Balancing) と冗長化",
      "servicesPage.assessmentDeliverables": "成果物",
      "servicesPage.assessmentDeliverableOne": "論理・物理ネットワーク構成図",
      "servicesPage.assessmentDeliverableTwo": "スイッチ・アクセスポイントの標準化設定シート",
      "servicesPage.assessmentDeliverableThree": "ネットワーク管理マニュアルと障害対応フロー",
      "servicesPage.assessmentDeliverableFour": "帯域テストおよび安定性検証レポート",
      "servicesPage.securityTitle": "情報セキュリティとデータ保護",
      "servicesPage.securityDescription": "多層防御、アクセス制御、バックアップ・復旧計画を整備し、業務停止とデータ損失のリスクを低減します。",
      "servicesPage.securityScope": "支援内容",
      "servicesPage.securityScopeOne": "次世代ファイアウォール、通信方針、侵入検知・防止機能",
      "servicesPage.securityScopeTwo": "3-2-1 バックアップ設計とランサムウェアを含む障害時の復旧テスト",
      "servicesPage.securityScopeThree": "ユーザーアクセス制御とリモートワーク向け VPN",
      "servicesPage.securityDeliverables": "成果物",
      "servicesPage.securityDeliverableOne": "情報セキュリティリスク評価と改善計画",
      "servicesPage.securityDeliverableTwo": "ファイアウォール方針とデータアクセス権限表",
      "servicesPage.securityDeliverableThree": "バックアップ構成、集中ストレージ、復旧テスト手順",
      "servicesPage.m365Title": "Microsoft 365 とデータガバナンス",
      "servicesPage.m365Description": "SharePoint、OneDrive、アクセス権限、多要素認証、アカウント管理を整備し、情報漏洩リスクを低減します。",
      "servicesPage.m365Scope": "支援内容",
      "servicesPage.m365ScopeOne": "SharePoint / OneDrive 上のフォルダ共有構成と権限設計",
      "servicesPage.m365ScopeTwo": "対象ユーザー向け多要素認証とリモートアクセス計画",
      "servicesPage.m365ScopeThree": "アカウントの発行、確認、失効手順の標準化",
      "servicesPage.m365Deliverables": "成果物",
      "servicesPage.m365DeliverableOne": "データアクセス権限マトリクスおよび安全なファイル共有マニュアル",
      "servicesPage.m365DeliverableTwo": "多要素認証の展開チェックリストとリモートアクセス方針",
      "servicesPage.m365DeliverableThree": "アカウント発行・失効運用の標準作業手順書 (SOP)",
      "servicesPage.networkTitle": "機器選定と IT コスト最適化",
      "servicesPage.networkDescription": "性能、拡張性、総保有コストのバランスを考慮し、機器、サーバー、クラウド、ライセンスを提案します。",
      "servicesPage.networkScope": "支援内容",
      "servicesPage.networkScopeOne": "負荷と利用要件を確認し、適切な機器仕様を選定",
      "servicesPage.networkScopeTwo": "ベンダー見積書を第三者の立場で確認し、不要な費用を特定",
      "servicesPage.networkScopeThree": "実利用に合わせたクラウド、法人メール、ライセンス数の選定",
      "servicesPage.networkDeliverables": "成果物",
      "servicesPage.networkDeliverableOne": "選択肢の比較表と総保有コスト分析",
      "servicesPage.networkDeliverableTwo": "利用規模と拡張計画に合う推奨機器一覧",
      "servicesPage.networkDeliverableThree": "実際のニーズに基づく不要投資の削減提案",
      "servicesPage.managerTitle": "中小企業向け伴走型 IT 管理",
      "servicesPage.managerDescription": "専任 IT マネージャーを置かない企業向けに、ベンダー、予算、リスク、IT 計画の管理を支援します。",
      "servicesPage.managerScope": "支援内容",
      "servicesPage.managerScopeOne": "ベンダー、技術見積書、予算、ソフトウェアライセンスの評価",
      "servicesPage.managerScopeTwo": "IT 資産管理、定期的なセキュリティ確認、ロードマップ策定",
      "servicesPage.managerScopeThree": "経営陣との定期会議と優先度の高い技術課題への対応支援",
      "servicesPage.managerDeliverables": "成果物",
      "servicesPage.managerDeliverableOne": "見積書評価レポートと技術予算の提案",
      "servicesPage.managerDeliverableTwo": "年間 IT 予算計画とシステムリスク一覧",
      "servicesPage.managerDeliverableThree": "定期レビュー議事録と投資判断に関する提案"
    }
  };
  const themeLabels = {
    en: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },
    vi: { toDark: "Chuyển sang giao diện tối", toLight: "Chuyển sang giao diện sáng" },
    ja: { toDark: "ダークテーマに切り替える", toLight: "ライトテーマに切り替える" }
  };

  function readPreference(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      return;
    }
  }

  function getTranslatedValue(language, key, fallback) {
    return translations[language]?.[key] || fallback;
  }

  function updateMetadata(language, metadata, defaults) {
    const localized = metadata?.[language] || defaults;

    document.title = localized.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", localized.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", localized.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", localized.description);
  }

  window.SiteControls = {
    init(options = {}) {
      const textElements = [...document.querySelectorAll("[data-i18n]")];
      const textDefaults = new WeakMap();
      const attributeConfigs = [
        { selector: "[data-i18n-aria-label]", dataset: "i18nAriaLabel", attribute: "aria-label" },
        { selector: "[data-i18n-alt]", dataset: "i18nAlt", attribute: "alt" },
        { selector: "[data-i18n-title]", dataset: "i18nTitle", attribute: "title" }
      ];
      const attributeDefaults = new WeakMap();
      const metadataDefaults = {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute("content") || ""
      };
      const languageOptions = [...document.querySelectorAll("[data-language]")];
      const currentLanguageLabel = document.getElementById("current-language-label");
      const themeButton = document.getElementById("theme-toggle-btn");
      const themeIcon = document.getElementById("theme-toggle-icon");
      const onLanguageChange = options.onLanguageChange || (() => {});
      let activeLanguage = "en";

      textElements.forEach((element) => textDefaults.set(element, element.textContent));
      attributeConfigs.forEach((config) => {
        document.querySelectorAll(config.selector).forEach((element) => {
          const defaults = attributeDefaults.get(element) || {};
          defaults[config.attribute] = element.getAttribute(config.attribute) || "";
          attributeDefaults.set(element, defaults);
        });
      });

      function updateTheme(theme) {
        document.documentElement.setAttribute("data-bs-theme", theme);
        savePreference("thaoit-theme", theme);

        if (!themeButton || !themeIcon) {
          return;
        }

        const isDark = theme === "dark";
        themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
        themeButton.setAttribute("aria-label", themeLabels[activeLanguage][isDark ? "toLight" : "toDark"]);
        themeButton.setAttribute("title", themeLabels[activeLanguage][isDark ? "toLight" : "toDark"]);
      }

      function updateLanguage(language) {
        activeLanguage = language;
        document.documentElement.setAttribute("lang", language);

        textElements.forEach((element) => {
          const key = element.dataset.i18n;
          element.textContent = getTranslatedValue(language, key, textDefaults.get(element));
        });

        attributeConfigs.forEach((config) => {
          document.querySelectorAll(config.selector).forEach((element) => {
            const defaults = attributeDefaults.get(element) || {};
            const key = element.dataset[config.dataset];
            element.setAttribute(config.attribute, getTranslatedValue(language, key, defaults[config.attribute]));
          });
        });

        languageOptions.forEach((option) => {
          const isActive = option.dataset.language === language;
          option.classList.toggle("active", isActive);
          option.setAttribute("aria-pressed", String(isActive));
        });
        if (currentLanguageLabel) {
          currentLanguageLabel.textContent = languageLabels[language];
        }

        updateMetadata(language, options.metadata, metadataDefaults);
        updateTheme(readPreference("thaoit-theme") || "dark");
        savePreference("thaoit-language", language);
        onLanguageChange(language);
      }

      languageOptions.forEach((option) => {
        option.addEventListener("click", () => updateLanguage(option.dataset.language));
      });

      themeButton?.addEventListener("click", () => {
        const nextTheme = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
        updateTheme(nextTheme);
      });

      const storedLanguage = readPreference("thaoit-language");
      updateLanguage(supportedLanguages.includes(storedLanguage) ? storedLanguage : "en");

      return { updateLanguage };
    }
  };
})();
