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
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.capabilities": "Capabilities",
      "nav.about": "About",
      "nav.contact": "Contact",
      "controls.openNavigation": "Open navigation menu",
      "controls.chooseLanguage": "Choose language",
      "hero.badge": "Network management and information security consultant",
      "hero.titleStart": "Resilient enterprise network, security &",
      "hero.titleHighlight": "cost-effective technology",
      "hero.description": "Partnering with manufacturing enterprises and SMEs: High-capacity network architecture design, information security and data governance, and cost-effective technology advisory tailored to business needs and budget.",
      "hero.tagNetwork": "Network and VLAN",
      "hero.tagFirewall": "Firewall and infosec",
      "hero.tagSecurity": "Cost-effective IT",
      "hero.tagBackup": "Automated backup",
      "hero.tagStorage": "Secure data storage",
      "hero.bookConsultation": "Contact now",
      "hero.chatZalo": "Chat via Zalo",
      "services.kicker": "Services",
      "services.title": "Fit-for-purpose technology, optimised cost",
      "services.description": "Focused on core strengths: Enterprise network architecture, information security governance, and cost-effective technology selection.",
      "services.viewDetails": "View service details",
      "services.receive": "What you receive",
      "process.kicker": "Working process",
      "process.title": "Transparent advisory and delivery process",
      "process.description": "Methodical approach with flexible after-hours and weekend availability, ensuring zero disruption to daily business operations.",
      "process.step1Title": "Initial discovery and assessment",
      "process.step1Desc": "Understand business needs, user headcount, current network state, and information security risks.",
      "process.step2Title": "Solution design and budget plan",
      "process.step2Desc": "Architect technical plans, size equipment specifications accurately, and build transparent budgets without over-purchasing.",
      "process.step3Title": "Technical deployment and verification",
      "process.step3Desc": "Directly configure VLAN segmentation, enterprise firewall rules, bandwidth balancing, and information security policies.",
      "process.step4Title": "Handover documentation and ongoing advisory",
      "process.step4Desc": "Deliver as-built network diagrams, operational runbooks, and provide ongoing technical advisory and periodic audits.",
      "cases.kicker": "Capabilities",
      "cases.title": "Proven network architecture and information security capabilities",
      "cases.description": "From high-capacity network engineering and data risk mitigation to optimizing hardware investment and software licensing.",
      "about.kicker": "About",
      "about.role": "Network management and information security consultant",
      "about.descriptionOne": "With over 8 years of hands-on experience in enterprise network design, administration, and information security for manufacturing and SME businesses, Nguyen The Thao helps organisations establish robust network foundations and secure data storage with optimal investment efficiency.",
      "about.descriptionTwo": "Every solution is rigorously evaluated for technical efficacy, long-term stability, and budget discipline. Your business achieves a standard, reliable system without wasting resources on over-engineered hardware or unnecessary licenses.",
      "about.highlightOneTitle": "Deep networking expertise",
      "about.highlightOneText": "Design high-capacity switching, VLAN segmentation, routing, and reliable enterprise Wi-Fi coverage.",
      "about.highlightTwoTitle": "Information security governance",
      "about.highlightTwoText": "Enforce strict security policies, access control, and protect business data against ransomware threats.",
      "about.highlightThreeTitle": "Right-sized hardware and cost optimization",
      "about.highlightThreeText": "Select fit-for-purpose hardware and technology tiers, saving both upfront capital and ongoing operational expenditure.",
      "about.capabilitiesKicker": "Professional capabilities",
      "about.capabilitiesTitle": "Solve IT challenges through network engineering and cost optimisation",
      "about.capabilitiesDescription": "The focus is always on high efficiency, long-term operational resilience, and tangible business value.",
      "about.capabilityOneTitle": "Resilient enterprise network architecture",
      "about.capabilityOneText": "Design core/access switching, VLAN segmentation, enterprise firewalls, and Wi-Fi failover for offices and factories.",
      "about.capabilityTwoTitle": "Information security and secure data storage",
      "about.capabilityTwoText": "Configure enterprise firewalls, endpoint defenses, automated 3-2-1 backups, and secure data storage systems.",
      "about.capabilityThreeTitle": "Right-sized technology and budget optimization",
      "about.capabilityThreeText": "Audit hardware specs, evaluate server and cloud options, and optimize software licenses to eliminate budget waste.",
      "contact.kicker": "Contact",
      "contact.title": "Connect to discuss the right solution",
      "contact.description": "Direct contact details to discuss your enterprise network architecture, information security, and IT cost optimization.",
      "contact.infoTitle": "Contact details",
      "contact.infoDescription": "Reach out via Zalo, phone, or email to discuss your requirements and schedule a suitable time.",
      "contact.phone": "Phone & Zalo",
      "contact.email": "Email",
      "contact.region": "Service coverage",
      "contact.regionValue": "Ho Chi Minh City · Binh Duong · Dong Nai",
      "contact.zalo": "Chat via Zalo",
      "contact.quickTitle": "Quick connect",
      "contact.quickDescription": "Scan the QR code with your mobile device to quickly access the website and save contact details.",
      "contact.qrAlt": "QR code pointing to thaoit.id.vn",
      "footer.role": "Network management and information security consultant",
      "backToTop": "Back to top",
      "image.infrastructureAlt": "Illustration of server, enterprise network, and IT security infrastructure",
      "servicesPage.home": "Home",
      "servicesPage.kicker": "Consulting services",
      "servicesPage.title": "Cost-effective network and information security solutions",
      "servicesPage.description": "Each service is tailored to deliver maximum operational efficiency, robust data protection, and alignment with your business budget.",
      "servicesPage.assessmentTitle": "Enterprise network design and optimization",
      "servicesPage.assessmentDescription": "For enterprises needing to design new or upgrade existing high-capacity, reliable, and easily manageable LAN/WAN infrastructure.",
      "servicesPage.assessmentScope": "Deployment scope",
      "servicesPage.assessmentScopeOne": "Core/Access switching architecture, VLAN segmentation, and routing",
      "servicesPage.assessmentScopeTwo": "Enterprise Wi-Fi planning with seamless roaming and anti-congestion",
      "servicesPage.assessmentScopeThree": "Multi-WAN Internet load balancing and automatic connection failover",
      "servicesPage.assessmentDeliverables": "Deliverables",
      "servicesPage.assessmentDeliverableOne": "Complete logical and physical network topology diagrams",
      "servicesPage.assessmentDeliverableTwo": "Standardized configuration sheets for switches and access points",
      "servicesPage.assessmentDeliverableThree": "Network administration manual and incident troubleshooting runbook",
      "servicesPage.assessmentDeliverableFour": "Bandwidth throughput testing and stability validation report",
      "servicesPage.securityTitle": "Information security governance and data protection",
      "servicesPage.securityDescription": "Safeguard digital assets, eliminate data loss risks, and ensure reliable data storage and business continuity.",
      "servicesPage.securityScope": "Deployment scope",
      "servicesPage.securityScopeOne": "Next-gen enterprise firewall, traffic inspection, and intrusion prevention",
      "servicesPage.securityScopeTwo": "Automated 3-2-1 data backup strategy and storage against ransomware",
      "servicesPage.securityScopeThree": "User access control policies and secure remote VPN access",
      "servicesPage.securityDeliverables": "Deliverables",
      "servicesPage.securityDeliverableOne": "Information security risk assessment report and remediation plan",
      "servicesPage.securityDeliverableTwo": "Firewall security policies and folder access permission matrix",
      "servicesPage.securityDeliverableThree": "Automated backup system and secure centralized data storage architecture",
      "servicesPage.networkTitle": "Right-sized technology and hardware advisory",
      "servicesPage.networkDescription": "Guide enterprises in selecting fit-for-purpose hardware, cloud services, and software licenses with maximum ROI.",
      "servicesPage.networkScope": "Advisory scope",
      "servicesPage.networkScopeOne": "Survey real operational demand and size equipment specifications accurately",
      "servicesPage.networkScopeTwo": "Independent technical review of vendor quotes to eliminate excess expenditure",
      "servicesPage.networkScopeThree": "Select right-sized cloud storage tiers, enterprise email, and software licenses",
      "servicesPage.networkDeliverables": "Expected outcomes",
      "servicesPage.networkDeliverableOne": "Technology option comparison matrix with Total Cost of Ownership (TCO)",
      "servicesPage.networkDeliverableTwo": "Scalable recommended hardware Bill of Materials (BOM) without over-engineering",
      "servicesPage.networkDeliverableThree": "20% to 30% reduction in upfront capital and recurring operating budgets",
      "servicesPage.managerTitle": "Fractional IT management and integrated solutions",
      "servicesPage.managerDescription": "Partner with executive leadership as a fractional IT director, bridging network strategy, security governance, and peripheral infrastructure.",
      "servicesPage.managerScope": "Ongoing support",
      "servicesPage.managerScopeOne": "Periodic audits of network health, automated backups, and information security hygiene",
      "servicesPage.managerScopeTwo": "Advisory on peripheral systems integration (CCTV, door access control when required)",
      "servicesPage.managerScopeThree": "Develop annual IT budget plans and technology upgrade roadmaps",
      "servicesPage.managerDeliverables": "Working approach",
      "servicesPage.managerDeliverableOne": "Agreed scope of work and scheduled milestone reports",
      "servicesPage.managerDeliverableTwo": "Rapid response and advisory for critical technical escalations",
      "servicesPage.managerDeliverableThree": "Independent perspective on strategic technology purchase and investment decisions"
    },
    vi: {
      "nav.home": "Trang chủ",
      "nav.services": "Dịch vụ",
      "nav.process": "Quy trình",
      "nav.capabilities": "Năng lực tư vấn",
      "nav.about": "Giới thiệu",
      "nav.contact": "Liên hệ",
      "controls.openNavigation": "Mở menu điều hướng",
      "controls.chooseLanguage": "Chọn ngôn ngữ",
      "hero.badge": "Tư vấn quản lý mạng và an toàn thông tin",
      "hero.titleStart": "Thiết kế hệ thống mạng, an toàn thông tin &",
      "hero.titleHighlight": "tối ưu chi phí công nghệ",
      "hero.description": "Đồng hành cùng doanh nghiệp và SME: Thiết kế kiến trúc mạng chịu tải, quản lý an toàn thông tin dữ liệu, và tư vấn giải pháp thiết bị công nghệ hiệu quả cao, bám sát nhu cầu với ngân sách tối ưu nhất.",
      "hero.tagNetwork": "Thiết kế mạng và VLAN",
      "hero.tagFirewall": "Tường lửa và an toàn thông tin",
      "hero.tagSecurity": "Tối ưu chi phí công nghệ",
      "hero.tagBackup": "Sao lưu dữ liệu tự động",
      "hero.tagStorage": "Lưu trữ dữ liệu an toàn",
      "hero.bookConsultation": "Liên hệ ngay",
      "hero.chatZalo": "Chat qua Zalo",
      "services.kicker": "Dịch vụ",
      "services.title": "Giải pháp công nghệ đúng nhu cầu, tối ưu chi phí",
      "services.description": "Tập trung vào thế mạnh cốt lõi: Thiết kế mạng doanh nghiệp, an toàn thông tin và tư vấn lựa chọn công nghệ hiệu quả.",
      "services.viewDetails": "Xem chi tiết dịch vụ",
      "services.receive": "Khách hàng nhận được",
      "process.kicker": "Quy trình làm việc",
      "process.title": "Quy trình tư vấn và triển khai minh bạch",
      "process.description": "Tiếp cận bài bản, linh hoạt ngoài giờ hành chính và cuối tuần, bảo đảm không gián đoạn hoạt động kinh doanh.",
      "process.step1Title": "Khảo sát và trao đổi sơ bộ",
      "process.step1Desc": "Lắng nghe nhu cầu thực tế, xác định quy mô người dùng, hiện trạng mạng và các rủi ro an toàn thông tin.",
      "process.step2Title": "Đề xuất giải pháp và ngân sách",
      "process.step2Desc": "Lập phương án kỹ thuật, cấu hình thiết bị đúng công suất và dự toán chi phí minh bạch, tránh lãng phí mua dư.",
      "process.step3Title": "Triển khai kỹ thuật và đo kiểm",
      "process.step3Desc": "Trực tiếp quy hoạch VLAN, cấu hình tường lửa, tối ưu đường truyền và thiết lập chính sách an toàn thông tin.",
      "process.step4Title": "Bàn giao hồ sơ và đồng hành",
      "process.step4Desc": "Bàn giao sơ đồ mạng hoàn công, tài liệu hướng dẫn quản trị và duy trì hỗ trợ kỹ thuật định kỳ cho doanh nghiệp.",
      "cases.kicker": "Năng lực tư vấn",
      "cases.title": "Năng lực thiết kế mạng và quản lý an toàn thông tin",
      "cases.description": "Từ thiết kế mạng chịu tải, phòng ngừa rủi ro dữ liệu đến tối ưu hóa chi phí đầu tư thiết bị và bản quyền công nghệ.",
      "about.kicker": "Giới thiệu",
      "about.role": "Tư vấn quản lý mạng và an toàn thông tin",
      "about.descriptionOne": "Với hơn 8 năm kinh nghiệm thực chiến trong quản trị, thiết kế hệ thống mạng và an toàn thông tin cho doanh nghiệp sản xuất và SME, Nguyễn Thế Thảo giúp doanh nghiệp xây dựng hạ tầng mạng vững chắc, bảo mật dữ liệu an toàn với chi phí đầu tư hợp lý nhất.",
      "about.descriptionTwo": "Mỗi giải pháp đều được đánh giá kỹ lưỡng dựa trên tính hiệu quả kỹ thuật, độ ổn định lâu dài và khả năng tối ưu ngân sách. Doanh nghiệp sẽ có được hệ thống chuẩn mực mà không cần lãng phí vào những thiết bị hay bản quyền vượt quá nhu cầu.",
      "about.highlightOneTitle": "Thiết kế mạng chuyên sâu",
      "about.highlightOneText": "Quy hoạch kiến trúc mạng chịu tải, phân tách VLAN, định tuyến và phủ sóng Wi-Fi doanh nghiệp ổn định.",
      "about.highlightTwoTitle": "Quản lý an toàn thông tin",
      "about.highlightTwoText": "Chính sách bảo mật chặt chẽ, kiểm soát truy cập và bảo vệ dữ liệu chống mã độc tống tiền (Ransomware).",
      "about.highlightThreeTitle": "Tối ưu hóa chi phí và thiết bị",
      "about.highlightThreeText": "Lựa chọn đúng thiết bị, đúng cấu hình công nghệ, giúp tiết kiệm ngân sách đầu tư ban đầu và chi phí vận hành.",
      "about.capabilitiesKicker": "Năng lực chuyên môn",
      "about.capabilitiesTitle": "Giải quyết bài toán CNTT bằng kiến thức mạng và tư duy tối ưu chi phí",
      "about.capabilitiesDescription": "Trọng tâm luôn là giải pháp hiệu quả cao, vận hành bền bỉ và tạo ra giá trị kinh tế thiết thực cho doanh nghiệp.",
      "about.capabilityOneTitle": "Kiến trúc mạng doanh nghiệp vững chắc",
      "about.capabilityOneText": "Thiết kế network, core/access switch, VLAN, Wi-Fi chuyên dụng và phương án dự phòng mạng cho văn phòng, nhà xưởng.",
      "about.capabilityTwoTitle": "Quản lý an toàn thông tin và lưu trữ dữ liệu",
      "about.capabilityTwoText": "Thiết lập tường lửa chuyên dụng, bảo vệ endpoint, chuẩn hóa hệ thống sao lưu và lưu trữ dữ liệu an toàn theo chiến lược 3-2-1.",
      "about.capabilityThreeTitle": "Tư vấn thiết bị công nghệ đúng nhu cầu",
      "about.capabilityThreeText": "Thẩm định cấu hình thiết bị, lựa chọn giải pháp đám mây hoặc máy chủ và tối ưu số lượng license để không lãng phí ngân sách.",
      "contact.kicker": "Liên hệ",
      "contact.title": "Kết nối để trao đổi giải pháp phù hợp",
      "contact.description": "Thông tin liên hệ trực tiếp để trao đổi về nhu cầu thiết kế mạng, an toàn thông tin và tối ưu chi phí CNTT của doanh nghiệp.",
      "contact.infoTitle": "Thông tin liên hệ",
      "contact.infoDescription": "Kết nối qua Zalo, điện thoại hoặc email để trao đổi nhu cầu và thống nhất thời gian phù hợp.",
      "contact.phone": "Điện thoại và Zalo",
      "contact.email": "Thư điện tử",
      "contact.region": "Khu vực hỗ trợ",
      "contact.regionValue": "TP. Hồ Chí Minh · Bình Dương · Đồng Nai",
      "contact.zalo": "Trao đổi qua Zalo",
      "contact.quickTitle": "Kết nối nhanh",
      "contact.quickDescription": "Quét mã QR bằng thiết bị di động để truy cập nhanh website và lưu thông tin liên hệ.",
      "contact.qrAlt": "Mã QR dẫn đến thaoit.id.vn",
      "footer.role": "Tư vấn quản lý mạng và an toàn thông tin",
      "backToTop": "Lên đầu trang",
      "image.infrastructureAlt": "Minh họa hệ thống máy chủ, mạng và bảo mật CNTT",
      "servicesPage.home": "Trang chủ",
      "servicesPage.kicker": "Dịch vụ tư vấn",
      "servicesPage.title": "Giải pháp mạng và an toàn thông tin tối ưu chi phí",
      "servicesPage.description": "Mỗi dịch vụ được thiết kế nhằm mang lại hiệu quả vận hành tối đa, an toàn dữ liệu tuyệt đối và phù hợp với ngân sách của doanh nghiệp.",
      "servicesPage.assessmentTitle": "Thiết kế và tối ưu hệ thống mạng doanh nghiệp",
      "servicesPage.assessmentDescription": "Dành cho doanh nghiệp cần quy hoạch mới hoặc nâng cấp mạng nội bộ chịu tải cao, hoạt động ổn định và dễ quản lý.",
      "servicesPage.assessmentScope": "Nội dung triển khai",
      "servicesPage.assessmentScopeOne": "Kiến trúc mạng Core/Access switch, phân tách VLAN và định tuyến",
      "servicesPage.assessmentScopeTwo": "Quy hoạch hệ thống Wi-Fi doanh nghiệp roaming mượt mà, chống nghẽn",
      "servicesPage.assessmentScopeThree": "Đấu nối đa đường truyền Internet cân bằng tải (Load Balancing) và dự phòng",
      "servicesPage.assessmentDeliverables": "Sản phẩm bàn giao",
      "servicesPage.assessmentDeliverableOne": "Sơ đồ kiến trúc mạng logic và vật lý hoàn chỉnh",
      "servicesPage.assessmentDeliverableTwo": "Cấu hình chuẩn hóa thiết bị chuyển mạch và phát sóng",
      "servicesPage.assessmentDeliverableThree": "Tài liệu quản trị mạng và quy trình xử lý sự cố kết nối",
      "servicesPage.assessmentDeliverableFour": "Biên bản đo kiểm băng thông và kiểm tra độ ổn định",
      "servicesPage.securityTitle": "Quản lý an toàn thông tin và bảo vệ dữ liệu",
      "servicesPage.securityDescription": "Bảo vệ tài sản số, ngăn ngừa rủi ro thất thoát dữ liệu và đảm bảo doanh nghiệp luôn có phương án phục hồi sau sự cố.",
      "servicesPage.securityScope": "Nội dung triển khai",
      "servicesPage.securityScopeOne": "Tường lửa chuyên dụng thế hệ mới, chính sách lọc lưu lượng và ngăn chặn xâm nhập",
      "servicesPage.securityScopeTwo": "Chiến lược sao lưu dữ liệu tự động 3-2-1 chống mã độc tống tiền (Ransomware)",
      "servicesPage.securityScopeThree": "Kiểm soát phân quyền truy cập người dùng, VPN bảo mật làm việc từ xa",
      "servicesPage.securityDeliverables": "Sản phẩm bàn giao",
      "servicesPage.securityDeliverableOne": "Báo cáo đánh giá rủi ro an toàn thông tin và giải pháp khắc phục",
      "servicesPage.securityDeliverableTwo": "Chính sách bảo mật tường lửa và phân quyền thư mục",
      "servicesPage.securityDeliverableThree": "Hệ thống sao lưu tự động và kiến trúc lưu trữ dữ liệu an toàn",
      "servicesPage.networkTitle": "Tư vấn thiết bị và công nghệ tối ưu chi phí",
      "servicesPage.networkDescription": "Giúp doanh nghiệp lựa chọn đúng thiết bị phần cứng, phần mềm và dịch vụ đám mây với hiệu năng cao nhất trên từng đồng chi phí.",
      "servicesPage.networkScope": "Nội dung tư vấn",
      "servicesPage.networkScopeOne": "Khảo sát nhu cầu sử dụng thực tế, tính toán cấu hình thiết bị đúng tải",
      "servicesPage.networkScopeTwo": "Thẩm định báo giá kỹ thuật từ nhà cung cấp, loại bỏ các chi phí dư thừa",
      "servicesPage.networkScopeThree": "Lựa chọn gói dịch vụ lưu trữ đám mây, email doanh nghiệp và bản quyền phần mềm phù hợp",
      "servicesPage.networkDeliverables": "Kết quả mong đợi",
      "servicesPage.networkDeliverableOne": "Bảng so sánh phương án công nghệ kèm phân tích chi phí sở hữu (TCO)",
      "servicesPage.networkDeliverableTwo": "Danh mục thiết bị đề xuất phù hợp quy mô, sẵn sàng mở rộng",
      "servicesPage.networkDeliverableThree": "Tiết kiệm 20% - 30% chi phí đầu tư ban đầu và ngân sách duy trì",
      "servicesPage.managerTitle": "Quản trị CNTT đồng hành và giải pháp tích hợp",
      "servicesPage.managerDescription": "Đồng hành cùng ban giám đốc trong vai trò Trưởng phòng CNTT bán thời gian, kết nối toàn diện hạ tầng mạng, bảo mật và các hệ thống phụ trợ.",
      "servicesPage.managerScope": "Hỗ trợ định kỳ",
      "servicesPage.managerScopeOne": "Rà soát định kỳ hệ thống mạng, dữ liệu sao lưu và an toàn thông tin",
      "servicesPage.managerScopeTwo": "Tư vấn tích hợp các hạ tầng mở rộng (hệ thống camera, kiểm soát ra vào khi có nhu cầu)",
      "servicesPage.managerScopeThree": "Xây dựng lộ trình nâng cấp công nghệ và kế hoạch ngân sách hàng năm",
      "servicesPage.managerDeliverables": "Cách làm việc",
      "servicesPage.managerDeliverableOne": "Thống nhất phạm vi công việc và báo cáo định kỳ",
      "servicesPage.managerDeliverableTwo": "Hỗ trợ xử lý nhanh các tình huống kỹ thuật quan trọng",
      "servicesPage.managerDeliverableThree": "Đồng hành tư vấn các quyết định đầu tư công nghệ lớn của doanh nghiệp"
    },
    ja: {
      "nav.home": "ホーム",
      "nav.services": "サービス",
      "nav.process": "進め方",
      "nav.capabilities": "専門性",
      "nav.about": "紹介",
      "nav.contact": "お問い合わせ",
      "controls.openNavigation": "ナビゲーションを開く",
      "controls.chooseLanguage": "言語を選択",
      "hero.badge": "ネットワーク管理・情報セキュリティ顧問",
      "hero.titleStart": "ネットワーク構築、情報セキュリティ &",
      "hero.titleHighlight": "最適な IT コスト設計",
      "hero.description": "製造業および中小企業向け：高負荷に耐えるネットワーク設計、情報セキュリティ管理、そして企業の予算と要件に最も合致した費用対効果の高い機器・技術ソリューションを提案します。",
      "hero.tagNetwork": "ネットワーク設計・VLAN",
      "hero.tagFirewall": "ファイアウォール・情報セキュリティ",
      "hero.tagSecurity": "IT コスト最適化",
      "hero.tagBackup": "自動バックアップ",
      "hero.tagStorage": "セキュアデータストレージ",
      "hero.bookConsultation": "今すぐ連絡する",
      "hero.chatZalo": "Zalo で相談する",
      "services.kicker": "サービス",
      "services.title": "要件に適合した高効率・最適コストソリューション",
      "services.description": "企業ネットワーク設計、情報セキュリティ管理、そして無駄のない技術選定という核となる強みにフォーカスします。",
      "services.viewDetails": "サービスの詳細を見る",
      "services.receive": "提供内容",
      "process.kicker": "進め方",
      "process.title": "透明性の高いコンサルティング手順",
      "process.description": "業務を中断させない時間外対応と、体系的なアプローチで着実に導入を進めます。",
      "process.step1Title": "初回ヒアリングと現状確認",
      "process.step1Desc": "利用者規模、業務フロー、既存ネットワークの課題やセキュリティリスクを正確に把握します。",
      "process.step2Title": "最適な提案と予算策定",
      "process.step2Desc": "過剰投資を防ぎ、実運用に即した機器仕様、ネットワーク構成図、明瞭な予算計画を策定します。",
      "process.step3Title": "導入作業と品質テスト",
      "process.step3Desc": "VLAN 分割、専用ファイアウォール、通信負荷分散、情報セキュリティ基準の直接設定と検証を行います。",
      "process.step4Title": "運用引継ぎと継続サポート",
      "process.step4Desc": "完成構成図とマニュアルを納品し、定期的な点検と技術サポートを提供します。",
      "cases.kicker": "専門性",
      "cases.title": "ネットワーク構築と情報セキュリティ管理の専門性",
      "cases.description": "高負荷ネットワーク設計からデータ保護、過剰投資を削減する機器・ライセンス選定まで支援します。",
      "about.kicker": "紹介",
      "about.role": "ネットワーク管理・情報セキュリティ顧問",
      "about.descriptionOne": "製造業および中小企業におけるネットワーク構築と情報セキュリティ管理の 8 年以上の現場経験を活かし、堅牢で安全、かつ最も費用対効果の高いシステム環境を実現します。",
      "about.descriptionTwo": "技術的な実効性と長期安定性、そして投資対効果の最大化を重視します。過剰なスペックや無駄なライセンス費用を排除し、身の丈に合った最適なソリューションを導き出します。",
      "about.highlightOneTitle": "実践的なネットワーク設計",
      "about.highlightOneText": "オフィスや工場の高負荷通信を支える VLAN 設計、ルーティング、業務用 Wi-Fi 環境の最適化。",
      "about.highlightTwoTitle": "徹底した情報セキュリティ管理",
      "about.highlightTwoText": "アクセス権の適正化、ランサムウェア対策、自動バックアップによるデータ資産の完全保護。",
      "about.highlightThreeTitle": "設備選定とコスト最適化",
      "about.highlightThreeText": "必要十分な機器とクラウドの選定により、初期導入費用と運用コストの無駄を徹底的にカット。",
      "about.capabilitiesKicker": "専門領域",
      "about.capabilitiesTitle": "ネットワーク技術とコスト最適化思考で IT 課題を解決",
      "about.capabilitiesDescription": "高い費用対効果、安定稼働、そして企業にとって真に価値あるテクノロジー導入を追求します。",
      "about.capabilityOneTitle": "堅牢な企業ネットワーク基盤設計",
      "about.capabilityOneText": "Core/Access スイッチ、VLAN、業務用 Wi-Fi、回線冗長化など、止まらないネットワーク環境を設計。",
      "about.capabilityTwoTitle": "情報セキュリティとデータストレージ保護",
      "about.capabilityTwoText": "専用ファイアウォール、エンドポイント保護、安全なデータストレージと 3-2-1 ルールに基づく自動バックアップ。",
      "about.capabilityThreeTitle": "費用対効果を最大化する機器選定",
      "about.capabilityThreeText": "実稼働に見合ったスペック設定、クラウド/サーバーの選定、ライセンスの適正化でコストを最適化。",
      "contact.kicker": "お問い合わせ",
      "contact.title": "最適なソリューションについてご相談ください",
      "contact.description": "企業のネットワーク設計、情報セキュリティ、IT コスト削減に関するご相談は、以下よりご連絡ください。",
      "contact.infoTitle": "連絡先",
      "contact.infoDescription": "Zalo、電話、メールでご要望をお聞きし、都合のよい時間を調整します。",
      "contact.phone": "電話・Zalo",
      "contact.email": "メール",
      "contact.region": "対応エリア",
      "contact.regionValue": "ホーチミン市・ビンズオン省・ドンナイ省",
      "contact.zalo": "Zalo で相談する",
      "contact.quickTitle": "クイックアクセス",
      "contact.quickDescription": "モバイル端末で QR コードを読み取り、Web サイトへのアクセスや連絡先の保存が可能です。",
      "contact.qrAlt": "thaoit.id.vn への QR コード",
      "footer.role": "ネットワーク管理・情報セキュリティ顧問",
      "backToTop": "トップへ戻る",
      "image.infrastructureAlt": "サーバー、ネットワーク、IT セキュリティインフラのイラスト",
      "servicesPage.home": "ホーム",
      "servicesPage.kicker": "コンサルティングサービス",
      "servicesPage.title": "最適コストで実現するネットワーク & 情報セキュリティ",
      "servicesPage.description": "最大の運用効率、確実なデータ保護、企業の予算にフィットする費用対効果を両立するサービス体系です。",
      "servicesPage.assessmentTitle": "企業ネットワーク設計・最適化",
      "servicesPage.assessmentDescription": "高負荷に耐え、安定稼働し、管理しやすい社内 LAN/WAN 環境を新規構築または再設計します。",
      "servicesPage.assessmentScope": "支援内容",
      "servicesPage.assessmentScopeOne": "Core/Access スイッチ、VLAN 分割、ルーティング設計",
      "servicesPage.assessmentScopeTwo": "シームレスなローミングを実現する業務用 Wi-Fi の設計・最適化",
      "servicesPage.assessmentScopeThree": "複数インターネット回線の負荷分散 (Load Balancing) と冗長化",
      "servicesPage.assessmentDeliverables": "成果物",
      "servicesPage.assessmentDeliverableOne": "論理および物理ネットワーク構成図一式",
      "servicesPage.assessmentDeliverableTwo": "スイッチ・アクセスポイントの標準化設定シート",
      "servicesPage.assessmentDeliverableThree": "ネットワーク管理マニュアルと障害対応フロー",
      "servicesPage.assessmentDeliverableFour": "帯域テストおよび安定性検証レポート",
      "servicesPage.securityTitle": "情報セキュリティ管理・データ保護",
      "servicesPage.securityDescription": "企業のデジタル資産を守り、情報漏洩を防ぎ、万一の障害時にも迅速に復旧できる体制を構築します。",
      "servicesPage.securityScope": "支援内容",
      "servicesPage.securityScopeOne": "次世代専用ファイアウォール設定、トラフィック制限、侵入防止",
      "servicesPage.securityScopeTwo": "ランサムウェア対策としての 3-2-1 ルール自動バックアップ・ストレージ体制",
      "servicesPage.securityScopeThree": "ユーザー権限の適正化、セキュアなリモートアクセス (VPN)",
      "servicesPage.securityDeliverables": "成果物",
      "servicesPage.securityDeliverableOne": "セキュリティリスク評価レポートと対策計画",
      "servicesPage.securityDeliverableTwo": "ファイアウォールポリシーとアクセス権限設計書",
      "servicesPage.securityDeliverableThree": "自動バックアップ構成と安全な集中データストレージ設計書",
      "servicesPage.networkTitle": "機器選定・テクノロジーコスト最適化",
      "servicesPage.networkDescription": "過剰な投資を抑え、最も費用対効果の高いハードウェア、ソフトウェア、クラウド構成を提案します。",
      "servicesPage.networkScope": "支援内容",
      "servicesPage.networkScopeOne": "実利用状況の調査と、必要十分な機器スペックの算出",
      "servicesPage.networkScopeTwo": "外部ベンダー見積書の技術審査と、不要なコストの削減",
      "servicesPage.networkScopeThree": "クラウドストレージ、法人メール、ソフトウェアライセンスの適正化",
      "servicesPage.networkDeliverables": "期待される成果",
      "servicesPage.networkDeliverableOne": "総保有コスト (TCO) を考慮した技術比較表",
      "servicesPage.networkDeliverableTwo": "将来の拡張性を担保した推奨機器リスト",
      "servicesPage.networkDeliverableThree": "初期投資および年間維持コストの 20%〜30% 削減",
      "servicesPage.managerTitle": "非常勤 IT 顧問・統合インフラ支援",
      "servicesPage.managerDescription": "非常勤 IT マネージャーとして、ネットワーク、セキュリティ、付帯インフラの全体最適化を継続支援します。",
      "servicesPage.managerScope": "支援内容",
      "servicesPage.managerScopeOne": "ネットワーク、バックアップ、情報セキュリティの定期監査",
      "servicesPage.managerScopeTwo": "付帯設備（必要に応じた監視カメラ・入退室管理等の統合）の技術助言",
      "servicesPage.managerScopeThree": "IT ロードマップの策定と年間 IT 予算の最適化",
      "servicesPage.managerDeliverables": "進め方",
      "servicesPage.managerDeliverableOne": "支援範囲の合意と定期レポートの提出",
      "servicesPage.managerDeliverableTwo": "重要事案や障害発生時の迅速な技術支援",
      "servicesPage.managerDeliverableThree": "重要な IT 投資判断における中立的なアドバイザリー"
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
      let activeLanguage = "vi";

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
      updateLanguage(supportedLanguages.includes(storedLanguage) ? storedLanguage : "vi");

      return { updateLanguage };
    }
  };
})();
