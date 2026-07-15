/**
 * SERVICES PORTFOLIO JAVASCRIPT
 * Developer: Nguyễn Thế Thảo
 * Assistant: Antigravity AI
 */

// ==========================================================================
// TỪ ĐIỂN DỊCH THUẬT TĨNH (i18n) CHO SERVICES
// ==========================================================================
const translations = {
  vi: {
    "services.pageTitle": "Team IT Capabilities & Solutions - Hồ sơ năng lực đội ngũ",
    "nav.personal": "Trang cá nhân",
    "nav.servicesTitle": "Năng lực Team",
    "nav.servicesList": "Dịch vụ",
    "nav.workflow": "Quy trình",
    "nav.contact": "Liên hệ",
    "nav.sla": "Cam kết SLA",
    "services.badge": "Giải pháp Công nghệ & Hạ tầng CNTT",
    "services.heroTitlePrefix": "Hồ sơ năng lực",
    "services.heroTitleSuffix": "Đội ngũ IT",
    "services.heroDesc": "Chúng tôi cung cấp các dịch vụ tư vấn, thiết kế, triển khai hạ tầng mạng, số hóa quy trình và phân tích dữ liệu chuyên nghiệp cho doanh nghiệp. Giúp tối ưu hóa vận hành và thúc đẩy tăng trưởng mạnh mẽ.",
    "services.btnExplore": "Khám phá năng lực",
    "services.btnQuote": "Nhận tư vấn ngay",
    "services.listTitle": "DỊCH VỤ & GIẢI PHÁP TIÊU BIỂU",
    "services.listDesc": "Các mảng năng lực chuyên sâu mà chúng tôi tự tin mang lại giá trị thiết thực và hiệu quả cao nhất cho đối tác.",
    "workflow.title": "QUY TRÌNH LÀM VIỆC CHUYÊN NGHIỆP",
    "workflow.step1Title": "Khảo sát & Tư vấn",
    "workflow.step1Desc": "Tiếp nhận yêu cầu, khảo sát thực trạng hạ tầng hoặc nghiệp vụ và tư vấn giải pháp ban đầu tối ưu chi phí.",
    "workflow.step2Title": "Thiết kế & Lập kế hoạch",
    "workflow.step2Desc": "Xây dựng bản vẽ kỹ thuật chi tiết, đề xuất sơ đồ kiến trúc, lựa chọn thiết bị công nghệ và lên tiến độ triển khai cụ thể.",
    "workflow.step3Title": "Triển khai & Kiểm thử",
    "workflow.step3Desc": "Tiến hành thi công lắp đặt phần cứng hoặc lập trình phần mềm, cấu hình chi tiết và chạy thử nghiệm hệ thống.",
    "workflow.step4Title": "Bàn giao & Bảo trì",
    "workflow.step4Desc": "Bàn giao sơ đồ, tài liệu hướng dẫn vận hành, chuyển giao công nghệ và cung cấp dịch vụ bảo trì định kỳ hỗ trợ 24/7.",
    "contact.title": "LIÊN HỆ ĐỘI NGŨ",
    "services.contactDesc": "Hãy gửi yêu cầu của bạn hoặc kết nối trực tiếp với chúng tôi để nhận được sự tư vấn chuyên sâu nhanh nhất.",
    "contact.infoTitle": "Thông tin liên lạc",
    "contact.phone": "Điện thoại",
    "contact.email": "Thư điện tử",
    "contact.address": "Khu vực hỗ trợ",
    "contact.formTitle": "Gửi yêu cầu trực tiếp",
    "contact.formName": "Họ và tên",
    "contact.formEmail": "Địa chỉ email",
    "contact.formSubject": "Dịch vụ quan tâm",
    "contact.formMessage": "Nội dung chi tiết",
    "contact.placeholderName": "Họ và tên của bạn",
    "contact.placeholderEmail": "name@example.com",
    "services.placeholderSubject": "Nhập dịch vụ bạn cần tư vấn...",
    "contact.placeholderMessage": "Mô tả cụ thể yêu cầu của bạn tại đây...",
    "contact.btnSubmit": "Gửi yêu cầu",
    "contact.sending": "Đang gửi...",
    "contact.success": "Cảm ơn bạn! Yêu cầu của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm nhất có thể.",
    "footer.copyright": "© 2026 Nguyễn Thế Thảo. Bảo lưu mọi quyền.",
    "services.capabilitiesHeader": "Năng lực chi tiết",
    "services.projectsHeader": "Dự án tiêu biểu",
    "services.slaTitle": "Cam kết chất lượng dịch vụ (SLA)",
    "services.slaDesc": "Chúng tôi luôn đặt uy tín và hiệu quả lên hàng đầu với các cam kết kỹ thuật rõ ràng:",
    "services.slaItem1Title": "Thời gian phản hồi",
    "services.slaItem1Badge": "Tối đa 2h / 24h",
    "services.slaItem1Desc": "Phản hồi yêu cầu trong vòng 2 giờ. Khảo sát thực tế tận nơi trong vòng 24 giờ kể từ khi tiếp nhận thông tin.",
    "services.slaItem2Title": "Hỗ trợ sự cố khẩn cấp",
    "services.slaItem2Badge": "Hỗ trợ 24/7",
    "services.slaItem2Desc": "Hỗ trợ kỹ thuật 24/7. Có mặt trực tiếp xử lý tại hiện trường trong vòng 4 giờ đối với sự cố nghiêm trọng.",
    "services.slaItem3Title": "Chất lượng thiết bị",
    "services.slaItem3Badge": "Chính hãng 100%",
    "services.slaItem3Desc": "100% thiết bị cung cấp chính hãng (CO/CQ đầy đủ). Bảo hành kỹ thuật tận nơi 12 tháng cho toàn hệ thống.",
    "services.slaItem4Title": "Độ sẵn sàng hệ thống",
    "services.slaItem4Badge": "Uptime 99.9%",
    "services.slaItem4Desc": "Thiết kế hạ tầng mạng đạt độ sẵn sàng tối thiểu 99.9% thông qua giải pháp dự phòng thiết bị và đường truyền.",
    "services.slaItem5Title": "Bảo trì định kỳ",
    "services.slaItem5Badge": "Mỗi 3 tháng",
    "services.slaItem5Desc": "Thực hiện bảo trì, kiểm tra an ninh và tối ưu hóa hệ thống định kỳ 3 tháng/lần trong thời hạn bảo hành.",
    "contact.btnCall": "Gọi ngay",
    "contact.btnZalo": "Chat Zalo",
    "contact.btnSendEmail": "Gửi email",
    "contact.addressDetail": "TP. Hồ Chí Minh, Bình Dương, Đồng Nai & Các tỉnh lân cận",
    "contact.badgeOnsite": "Hỗ trợ tận nơi",
    "button.backToTop": "Lên đầu trang"
  },
  en: {
    "services.pageTitle": "Team IT Capabilities & Solutions - Team Capabilities Profile",
    "nav.personal": "Personal Profile",
    "nav.servicesTitle": "Team Capabilities",
    "nav.servicesList": "Services",
    "nav.workflow": "Workflow",
    "nav.contact": "Contact",
    "nav.sla": "SLA Commitments",
    "services.badge": "Technology & IT Infrastructure Solutions",
    "services.heroTitlePrefix": "IT Capabilities &",
    "services.heroTitleSuffix": "Team Profile",
    "services.heroDesc": "We provide professional consulting, design, and deployment of network infrastructure, process digitization, and data analysis services for businesses. Drive efficiency and growth.",
    "services.btnExplore": "Explore Capabilities",
    "services.btnQuote": "Request Consultation",
    "services.listTitle": "KEY SERVICES & SOLUTIONS",
    "services.listDesc": "The specialized capabilities we confidently deliver to bring the highest practical value and efficiency to our partners.",
    "workflow.title": "PROFESSIONAL WORKFLOW",
    "workflow.step1Title": "Survey & Consult",
    "workflow.step1Desc": "Receive requests, survey current infrastructure or operations, and advise on initial cost-optimized solutions.",
    "workflow.step2Title": "Design & Plan",
    "workflow.step2Desc": "Draft detailed blueprints, propose architecture diagrams, select hardware/software, and set timelines.",
    "workflow.step3Title": "Deploy & Test",
    "workflow.step3Desc": "Perform physical installation or software coding, perform detailed configurations, and execute test runs.",
    "workflow.step4Title": "Handover & Support",
    "workflow.step4Desc": "Deliver network diagrams, operation manuals, transfer technology, and provide 24/7 maintenance support.",
    "contact.title": "CONTACT THE TEAM",
    "services.contactDesc": "Send your request or connect with us directly to receive the fastest expert advice.",
    "contact.infoTitle": "Contact Info",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Service Area",
    "contact.formTitle": "Send Direct Request",
    "contact.formName": "Full Name",
    "contact.formEmail": "Email Address",
    "contact.formSubject": "Service of Interest",
    "contact.formMessage": "Detailed Message",
    "contact.placeholderName": "Your full name",
    "contact.placeholderEmail": "name@example.com",
    "services.placeholderSubject": "Enter the service you need advice on...",
    "contact.placeholderMessage": "Describe your specific request here...",
    "contact.btnSubmit": "Submit Request",
    "contact.sending": "Sending...",
    "contact.success": "Thank you! Your request has been sent successfully. We will respond as soon as possible.",
    "footer.copyright": "© 2026 Nguyen The Thao. All rights reserved.",
    "services.capabilitiesHeader": "Detailed Capabilities",
    "services.projectsHeader": "Key Project Showcase",
    "services.slaTitle": "Service Level Agreement (SLA)",
    "services.slaDesc": "We always prioritize quality and efficiency with clear technical commitments:",
    "services.slaItem1Title": "Response Time",
    "services.slaItem1Badge": "Max 2h / 24h",
    "services.slaItem1Desc": "Respond to inquiries within 2 hours. On-site survey within 24 hours of receiving information.",
    "services.slaItem2Title": "Emergency Support",
    "services.slaItem2Badge": "24/7 Support",
    "services.slaItem2Desc": "24/7 technical support. On-site troubleshooting within 4 hours for critical incidents.",
    "services.slaItem3Title": "Equipment Quality",
    "services.slaItem3Badge": "100% Genuine",
    "services.slaItem3Desc": "100% genuine hardware supplied with full CO/CQ. 12-month on-site technical warranty for the entire system.",
    "services.slaItem4Title": "System Availability",
    "services.slaItem4Badge": "99.9% Uptime",
    "services.slaItem4Desc": "Network infrastructure designed for minimum 99.9% availability using redundant equipment and WAN links.",
    "services.slaItem5Title": "Routine Maintenance",
    "services.slaItem5Badge": "Every 3 Months",
    "services.slaItem5Desc": "Perform maintenance, security audits, and system optimization every 3 months during the warranty period.",
    "contact.btnCall": "Call Now",
    "contact.btnZalo": "Chat Zalo",
    "contact.btnSendEmail": "Send Email",
    "contact.addressDetail": "Ho Chi Minh City, Binh Duong, Dong Nai & Vicinity",
    "contact.badgeOnsite": "On-site Support",
    "button.backToTop": "Back to top"
  },
  ja: {
    "services.pageTitle": "Team IT Capabilities & Solutions - チーム能力プロファイル",
    "nav.personal": "個人プロフィール",
    "nav.servicesTitle": "チーム能力",
    "nav.servicesList": "サービス",
    "nav.workflow": "プロセス",
    "nav.contact": "連絡先",
    "nav.sla": "SLAコミットメント",
    "services.badge": "ITインフラ＆テクノロジーソリューション",
    "services.heroTitlePrefix": "IT能力と",
    "services.heroTitleSuffix": "チームのプロフィール",
    "services.heroDesc": "ビジネス向けのITインフラ構築、業務プロセスのデジタル化、データ分析などの専門的なサービスを提供しています。運用の最適化と成長を支援します。",
    "services.btnExplore": "能力を見る",
    "services.btnQuote": "相談を申し込む",
    "services.listTitle": "主要なサービスと解決策",
    "services.listDesc": "パートナーに最も実用的で高効率な価値を確信して提供できる専門能力分野です。",
    "workflow.title": "プロフェッショナルな業務プロセス",
    "workflow.step1Title": "調査とコンサルティング",
    "workflow.step1Desc": "要件を受領し、インフラや業務の現状調査を行い、初期のコスト最適化されたソリューションを提案します。",
    "workflow.step2Title": "設計と計画",
    "workflow.step2Desc": "詳細な技術設計図を作成し、アーキテクチャ図を提案し、機器や技術を選定し、具体的な展開スケジュールを策定します。",
    "workflow.step3Title": "導入とテスト",
    "workflow.step3Desc": "ハードウェアの設置工事やソフトウェア開発を進め、詳細設定を行い、システムテストを実行します。",
    "workflow.step4Title": "引き渡しと保守",
    "workflow.step4Desc": "設計図や運用マニュアルを引き渡し、技術移転を行い、24時間365日の定期的な保守サポートを提供します。",
    "contact.title": "チームへ連絡",
    "services.contactDesc": "ご要件を送信いただくか、直接ご連絡いただくことで、最も迅速に専門的な相談を受けることができます。",
    "contact.infoTitle": "連絡先情報",
    "contact.phone": "電話番号",
    "contact.email": "メールアドレス",
    "contact.address": "対応エリア",
    "contact.formTitle": "直接問い合わせを送信",
    "contact.formName": "お名前",
    "contact.formEmail": "メールアドレス",
    "contact.formSubject": "関心のあるサービス",
    "contact.formMessage": "詳細内容",
    "contact.placeholderName": "お名前を入力してください",
    "contact.placeholderEmail": "name@example.com",
    "services.placeholderSubject": "相談が必要なサービスを入力してください...",
    "contact.placeholderMessage": "こちらに具体的な要件を入力してください...",
    "contact.btnSubmit": "リクエストを送信",
    "contact.sending": "送信中...",
    "contact.success": "ありがとうございます！リクエストは正常に送信されました。できるだけ早くご返信いたします。",
    "footer.copyright": "© 2026 グエン・テー・タオ. All rights reserved.",
    "services.capabilitiesHeader": "詳細能力",
    "services.projectsHeader": "代表的なプロジェクト例",
    "services.slaTitle": "サービス品質保証 (SLA)",
    "services.slaDesc": "私たちは常に、明確な技術的コミットメントにより、信頼性と効率性を最優先しています。",
    "services.slaItem1Title": "応答時間",
    "services.slaItem1Badge": "最大2時間 / 24時間",
    "services.slaItem1Desc": "お問い合わせから2時間以内に返信。情報受領後24時間以内に現地調査を実施。",
    "services.slaItem2Title": "緊急障害サポート",
    "services.slaItem2Badge": "24時間365日",
    "services.slaItem2Desc": "24時間365日の技術サポート。重大な障害発生時、4時間以内に現地で対応。",
    "services.slaItem3Title": "機器の品質保証",
    "services.slaItem3Badge": "100%正規品",
    "services.slaItem3Desc": "提供機器は100%正規品（CO/CQ完備）。システム全体に対して12ヶ月間の現地技術保証を提供。",
    "services.slaItem4Title": "システムの可用性",
    "services.slaItem4Badge": "稼働率99.9%",
    "services.slaItem4Desc": "回線や機器の冗長化構成により、システム稼働率99.9%以上の可用性を設計。",
    "services.slaItem5Title": "定期保守メンテナンス",
    "services.slaItem5Badge": "3ヶ月ごと",
    "services.slaItem5Desc": "保証期間中、3ヶ月ごとに定期的なメンテナンス、セキュリティ診断、システム最適化を実施。",
    "contact.btnCall": "今すぐ電話",
    "contact.btnZalo": "Zaloチャット",
    "contact.btnSendEmail": "メール送信",
    "contact.addressDetail": "ホーチミン市、ビンズオン省、ドンナイ省及び近郊",
    "contact.badgeOnsite": "現地サポート",
    "button.backToTop": "トップへ戻る"
  },
  zh: {
    "services.pageTitle": "Team IT Capabilities & Solutions - 团队能力档案",
    "nav.personal": "个人主页",
    "nav.servicesTitle": "团队能力",
    "nav.servicesList": "特色服务",
    "nav.workflow": "业务流程",
    "nav.contact": "联系我们",
    "nav.sla": "SLA承诺",
    "services.badge": "技术与 IT 基础设施解决方案",
    "services.heroTitlePrefix": "IT 专业能力 &",
    "services.heroTitleSuffix": "团队档案",
    "services.heroDesc": "我们为企业提供网络基础设施规划、业务流程数字化和数据分析等专业咨询、设计与部署服务，助力企业运营优化与强劲增长。",
    "services.btnExplore": "探索能力",
    "services.btnQuote": "立即咨询",
    "services.listTitle": "特色服务与解决方案",
    "services.listDesc": "我们在以下专业领域深耕，致力于为合作伙伴创造最大实用价值与高效运营。",
    "workflow.title": "专业高效的工作流程",
    "workflow.step1Title": "需求勘测与咨询",
    "workflow.step1Desc": "接收客户需求，评估现有 IT 基础设施或业务流程，并提供初始 of 成本优化方案咨询。",
    "workflow.step2Title": "方案设计与规划",
    "workflow.step2Desc": "绘制详细技术图纸，规划网络与系统架构，挑选软硬件设备，并制定明确 of 实施进度表。",
    "workflow.step3Title": "工程实施与测试",
    "workflow.step3Desc": "进行硬件布线与设备安装，或开展定制软件开发，进行系统精细化配置并完成上线前测试。",
    "workflow.step4Title": "系统交付与维护",
    "workflow.step4Desc": "交付网络拓扑图及操作手册，完成技术交接培训，并提供 24/7 的定期技术支持与系统维护。",
    "contact.title": "联系我们",
    "services.contactDesc": "请直接与我们建立联系，以便获得最快、最专业 of 专属技术咨询服务。",
    "contact.infoTitle": "联系方式",
    "contact.phone": "联系电话 / Zalo",
    "contact.email": "电子邮箱",
    "contact.address": "支持区域",
    "contact.formTitle": "发送您的需求",
    "contact.formName": "姓名",
    "contact.formEmail": "电子邮箱",
    "contact.formSubject": "您关心的服务",
    "contact.formMessage": "详细留言",
    "contact.placeholderName": "请输入您的姓名",
    "contact.placeholderEmail": "name@example.com",
    "services.placeholderSubject": "请输入您感兴趣的系统或服务...",
    "contact.placeholderMessage": "请在此输入您的具体要求...",
    "contact.btnSubmit": "提交申请",
    "contact.sending": "正在提交...",
    "contact.success": "非常感谢！您的申请已成功提交，我们将尽快与您取得联系。",
    "footer.copyright": "© 2026 阮世草。保留所有权利。",
    "services.capabilitiesHeader": "详细能力范围",
    "services.projectsHeader": "代表项目案例",
    "services.slaTitle": "服务品质保证 (SLA)",
    "services.slaDesc": "我们坚信品质与信誉至上，并承诺提供以下清晰 of 量化技术指标保证：",
    "services.slaItem1Title": "响应时效保证",
    "services.slaItem1Badge": "最高 2小时 / 24小时",
    "services.slaItem1Desc": "收到咨询后在 2 小时内回复；在接收需求后 24 小时内安排工程师进行现场勘测。",
    "services.slaItem2Title": "紧急故障处理",
    "services.slaItem2Badge": "24/7 技术支持",
    "services.slaItem2Desc": "提供 24/7 全天候技术支持热线；针对严重故障，承诺在 4 小时内到达现场进行故障排除。",
    "services.slaItem3Title": "正品备件与保修",
    "services.slaItem3Badge": "100% 正品保障",
    "services.slaItem3Desc": "所供硬件和网络设备均为 100% 原厂正品（附带 CO/CQ 证书）；系统整体享 12 个月上门保修及技术支持。",
    "services.slaItem4Title": "网络可用性 (Uptime)",
    "services.slaItem4Badge": "99.9% 正常运行率",
    "services.slaItem4Desc": "通过双线负载均衡及核心设备冗余方案设计，确保企业网络基础设施可用性不低于 99.9%。",
    "services.slaItem5Title": "预防性定期维护",
    "services.slaItem5Badge": "每 3 个月一次",
    "services.slaItem5Desc": "在保修期内，每 3 个月对系统进行一次全面的预防性巡检、安全漏洞扫描及配置调优。",
    "contact.btnCall": "立即拨打",
    "contact.btnZalo": "Zalo 咨询",
    "contact.btnSendEmail": "发送邮件",
    "contact.addressDetail": "胡志明市、平阳省、同奈省及周边地区",
    "contact.badgeOnsite": "提供上门支持",
    "button.backToTop": "回到顶部"
  }
};

// ==========================================================================
// DỮ LIỆU DỊCH VỤ CỦA TEAM (VI - EN - JA)
// ==========================================================================
const teamServicesData = {
  vi: [
    {
      title: "Thi công & Tư vấn Hệ thống Mạng",
      iconClass: "fa-solid fa-network-wired",
      shortDesc: "Thiết kế, triển khai và tối ưu hóa hạ tầng mạng toàn diện cho doanh nghiệp và chuỗi dịch vụ.",
      capabilities: [
        "Khảo sát thực trạng, tư vấn giải pháp mạng logic và vật lý.",
        "Thi công lắp đặt router, switch L2/L3, firewall và Wi-Fi diện rộng.",
        "Cấu hình định tuyến, tối ưu băng thông và bảo mật mạng (VLAN, VPN).",
        "Chuẩn hóa tủ rack, hệ thống cáp mạng và bảo trì định kỳ."
      ],
      demoProject: "Thi công hệ thống mạng cho công ty sản xuất quy mô 100 nhân viên, đáp ứng 500 thiết bị."
    },
    {
      title: "Phát triển Web & Phần mềm",
      iconClass: "fa-solid fa-code",
      shortDesc: "Xây dựng các sản phẩm Web/App chất lượng cao, tối ưu SEO, hỗ trợ vận hành kinh doanh hiệu quả.",
      capabilities: [
        "Thiết kế landing page quảng cáo dự án Bất động sản chuẩn SEO.",
        "Phát triển Website bán hàng trực tuyến tích hợp cổng thanh toán.",
        "Xây dựng phần mềm quản lý vận hành (quán cafe, quán ăn, kho hàng).",
        "Tối ưu tốc độ tải trang, responsive và bảo mật thông tin."
      ],
      demoProject: "Thiết kế và triển khai web app quản lý quán cafe cho chuỗi 3 cửa hàng."
    },
    {
      title: "Hệ thống Camera Giám sát (CCTV)",
      iconClass: "fa-solid fa-video",
      shortDesc: "Cung cấp giải pháp camera giám sát an ninh toàn diện, lưu trữ lớn và giám sát từ xa.",
      capabilities: [
        "Tư vấn thiết kế sơ đồ lắp đặt camera tối ưu tầm nhìn.",
        "Lắp đặt hệ thống camera giám sát thông minh cho văn phòng, nhà xưởng.",
        "Triển khai giải pháp lưu trữ tập trung qua đầu ghi (NVR) hoặc NAS.",
        "Cấu hình truy cập từ xa thời gian thực qua điện thoại, máy tính."
      ],
      demoProject: "Lắp đặt và đồng bộ hóa hệ thống camera an ninh 32 mắt cho nhà xưởng."
    },
    {
      title: "Cung cấp Thiết bị IT Phần cứng",
      iconClass: "fa-solid fa-laptop",
      shortDesc: "Cung cấp thiết bị phần cứng, máy tính văn phòng, thiết bị mạng chính hãng chất lượng cao.",
      capabilities: [
        "Cung cấp PC văn phòng, laptop chuyên dụng, máy in và thiết bị ngoại vi.",
        "Cung cấp máy chủ doanh nghiệp (Server) và thiết bị mạng chuyên dụng.",
        "Hỗ trợ cài đặt, cấu hình ban đầu và chuyển giao phần cứng tận nơi.",
        "Chính sách bảo hành chính hãng uy tín, hỗ trợ kỹ thuật nhanh chóng."
      ],
      demoProject: "Cung cấp đồng bộ 20 máy tính văn phòng và thiết bị mạng cho công ty start-up."
    },
    {
      title: "Phân tích Dữ liệu & Báo cáo BI",
      iconClass: "fa-solid fa-chart-line",
      shortDesc: "Chuyển hóa dữ liệu thô từ Excel, ERP thành các báo cáo trực quan sinh động hỗ trợ ra quyết định.",
      capabilities: [
        "Thu thập, chuẩn hóa và làm sạch dữ liệu từ nhiều nguồn khác nhau.",
        "Thiết kế kho dữ liệu (Data Warehouse) cấu trúc tối ưu.",
        "Xây dựng dashboard BI (Power BI, Metabase) theo dõi KPI thời gian thực.",
        "Phân tích chuyên sâu dữ liệu bán hàng, nhân sự và sản xuất."
      ],
      demoProject: "Xây dựng dashboard BI báo cáo hiệu suất kinh doanh cho doanh nghiệp bán lẻ."
    },
    {
      title: "Giải pháp Số hóa & Tích hợp AI",
      iconClass: "fa-solid fa-brain",
      shortDesc: "Đi đầu trong số hóa quy trình thủ công và áp dụng trí tuệ nhân tạo tối ưu năng suất lao động.",
      capabilities: [
        "Xây dựng Form điện tử (E-form) thay thế biểu mẫu giấy tờ.",
        "Tự động hóa quy trình nghiệp vụ (RPA) bằng n8n, Python.",
        "Tích hợp camera AI thông minh nhận diện khuôn mặt và cảnh báo an toàn.",
        "Phát triển chatbot hỗ trợ khách hàng và vận hành nội bộ."
      ],
      demoProject: "Tự động hóa quy trình đối soát dữ liệu kho hàng bằng AI & công cụ n8n."
    }
  ],
  en: [
    {
      title: "Network Solutions & Installation",
      iconClass: "fa-solid fa-network-wired",
      shortDesc: "Design, deploy, and optimize comprehensive network infrastructure for enterprises and retail chains.",
      capabilities: [
        "Assess current state, consult on logical & physical network layouts.",
        "Install and set up enterprise routers, L2/L3 switches, firewalls, and wide-area Wi-Fi.",
        "Configure routing, bandwidth optimization, and network security (VLAN, VPN).",
        "Standardize server racks, cable patching, and perform periodic maintenance."
      ],
      demoProject: "Deployed network infrastructure for a manufacturing company with 100 employees, supporting 500 devices."
    },
    {
      title: "Web & Software Development",
      iconClass: "fa-solid fa-code",
      shortDesc: "Build high-performance websites and management apps optimized for SEO and business operations.",
      capabilities: [
        "Design SEO-friendly landing pages for real estate projects.",
        "Develop e-commerce websites integrated with online payment gateways.",
        "Build customized operational software (cafe/restaurant management, inventory).",
        "Optimize page speeds, responsive layouts, and data security."
      ],
      demoProject: "Designed and launched a cafe management web application for a 3-store chain."
    },
    {
      title: "CCTV & Security Systems",
      iconClass: "fa-solid fa-video",
      shortDesc: "Provide comprehensive security surveillance solutions with large-capacity storage and remote access.",
      capabilities: [
        "Consult and design camera installation diagrams for optimal coverage.",
        "Install smart security cameras for office buildings and factories.",
        "Deploy centralized storage solutions via NVR or NAS systems.",
        "Configure secure real-time remote monitoring on mobile apps and PCs."
      ],
      demoProject: "Installed and synchronized a 32-camera security system for a factory."
    },
    {
      title: "IT Hardware & Equipment Supply",
      iconClass: "fa-solid fa-laptop",
      shortDesc: "Supply genuine, high-quality office computers, enterprise servers, and network hardware.",
      capabilities: [
        "Supply office PCs, professional laptops, printers, and peripherals.",
        "Provide enterprise-grade servers and specialized network appliances.",
        "Provide setup, initial configuration, and on-site hardware handover.",
        "Offer reliable warranty policies and rapid technical troubleshooting."
      ],
      demoProject: "Supplied 20 office workstations and network hardware for a start-up."
    },
    {
      title: "Data Analytics & BI Reporting",
      iconClass: "fa-solid fa-chart-line",
      shortDesc: "Transform raw data from Excel/ERP into dynamic dashboards to support data-driven decisions.",
      capabilities: [
        "Collect, clean, and standardize data from multiple sources.",
        "Design optimized database schemas and Data Warehouse structures.",
        "Build BI dashboards (Power BI, Metabase) for real-time KPI tracking.",
        "Perform in-depth analysis on sales, HR, and manufacturing data."
      ],
      demoProject: "Built an executive BI dashboard tracking sales metrics for a retail client."
    },
    {
      title: "Digitization & AI Integration",
      iconClass: "fa-solid fa-brain",
      shortDesc: "Pioneer in automating manual workflows and integrating AI solutions to optimize team productivity.",
      capabilities: [
        "Build digital forms (E-form) to replace physical paperwork.",
        "Automate business processes (RPA) using n8n and Python scripts.",
        "Integrate AI cameras for facial recognition and safety alerts.",
        "Develop conversational AI Chatbots for support and internal operations."
      ],
      demoProject: "Automated warehouse reconciliation processes using AI & n8n workflows."
    }
  ],
  ja: [
    {
      title: "ネットワーク構築・コンサルティング",
      iconClass: "fa-solid fa-network-wired",
      shortDesc: "企業や店舗チェーン向けの包括的なネットワークインフラの設計、導入、最適化を提供します。",
      capabilities: [
        "インフラ現状調査、論理・物理ネットワーク構成の提案。",
        "ルーター、L2/L3スイッチ、ファイアウォール、広帯域Wi-Fiの導入・設定。",
        "ルーティング設定、帯域制御、セキュリティ対策（VLAN、VPN等）。",
        "ラック整理、LAN配線の標準化、定期的なネットワークメンテナンス。"
      ],
      demoProject: "従業員100人規模、500台のデバイスに対応する製造会社向けのネットワーク環境構築。"
    },
    {
      title: "Web＆システム開発",
      iconClass: "fa-solid fa-code",
      shortDesc: "SEO対策済みWebサイトや店舗の管理ツールなど、ビジネス運営を支える高品質な開発を行います。",
      capabilities: [
        "不動産プロジェクト用SEO最適化ランディングページの構築。",
        "決済ゲートウェイを連携したオンラインECサイトの開発。",
        "カフェ、飲食店、または倉庫管理などのカスタム運営システム開発。",
        "ロード時間最適化、レスポンシブデザイン、高度なセキュリティの担保。"
      ],
      demoProject: "3店舗展開のカフェチェーン向け店舗管理Webアプリケーション開発。"
    },
    {
      title: "監視カメラシステム（CCTV）",
      iconClass: "fa-solid fa-video",
      shortDesc: "大容量ストレージとリアルタイム遠隔監視を備えた総合防犯カメラソリューションを提供。",
      capabilities: [
        "監視視野を最大化するカメラ配置設計のコンサルティング。",
        "オフィスや工場向けのスマート防犯カメラ設備の設置工事。",
        "レコーダー（NVR）またはNASを用いたデータ集中蓄積の設計。",
        "スマホやPCから時間と場所を選ばない安全な遠隔ライブ映像配信。"
      ],
      demoProject: "製造工場内における32台の防犯カメラ一元管理システムの導入。"
    },
    {
      title: "ITハードウェア・機器の提供",
      iconClass: "fa-solid fa-laptop",
      shortDesc: "オフィスPC、業務用サーバー、およびネットワーク機器等の純正かつ高品質な機器を調達します。",
      capabilities: [
        "事務用PC、プロフェッショナルPC、プリンターおよび周辺機器の納品。",
        "エンタープライズ用サーバーおよび専用ネットワークアプライアンスの調達。",
        "現地での初期キッティング、接続・構成の実施、および動作確認の徹底。",
        "迅速なメーカー保証と緊急時のオンサイトサポート対応。"
      ],
      demoProject: "スタートアップ企業への事務用PC20台およびネットワーク機器一式提供。"
    },
    {
      title: "データ分析＆BIダッシュボード",
      iconClass: "fa-solid fa-chart-line",
      shortDesc: "ExcelやERPに散在するローデータを、経営意思決定を支えるダッシュボードに可視化します。",
      capabilities: [
        "複数ソースからのデータ収集、名寄せ、クリーニング処理。",
        "最適化されたデータ構造設計とDWH（データウェアハウス）の構築。",
        "リアルタイムKPI追跡用BIダッシュボード（Power BI/Metabase等）開発。",
        "売上、人事、および製造プロセスに関する高度なデータ分析。"
      ],
      demoProject: "小売業クライアント向け月次・週次の業績ダッシュボードの構築。"
    },
    {
      title: "業務デジタル化＆AIソリューション",
      iconClass: "fa-solid fa-brain",
      shortDesc: "ペーパーレス化の推進とAIを用いたワークフローの自動化により、業務効率の大幅向上に寄여します。",
      capabilities: [
        "紙の申請書をデジタル化する電子フォーム（E-form）の設計開発。",
        "n8nやPythonを活用した繰り返し事務作業の自動化（RPA）。",
        "顔認証や危険エリア侵入検知を行うスマートAIカメラシステムの導入。",
        "顧客対応や社内問い合わせを自動化する対話型チャットボット開発。"
      ],
      demoProject: "AIとn8n連携による在庫照合プロセスの自動化・省人化。"
    }
  ],
  zh: [
    {
      title: "网络系统布线与咨询",
      iconClass: "fa-solid fa-network-wired",
      shortDesc: "为企业和连锁店面提供全面、安全的网络基础设施设计、搭建及优化服务。",
      capabilities: [
        "网络现状评估，提供逻辑及物理拓扑结构设计方案。",
        "企业级路由器、L2/L3 交换机、防火墙及大面积工业 Wi-Fi 部署。",
        "配置路由、进行带宽控制，并实现高安全网络划分（VLAN、VPN）。",
        "弱电网络机柜整理、综合布线标准化设计与定期网络维护。"
      ],
      demoProject: "为员工规模100人、需接入500台设备的制造厂设计并实施整体网路架构。"
    },
    {
      title: "定制 Web & 软件开发",
      iconClass: "fa-solid fa-code",
      shortDesc: "构建 high 响应速度、利于 SEO 优化的公司官网、落地页和连锁店面运营管理系统。",
      capabilities: [
        "设计专为房地产等项目量身定制的 SEO 优化营销落地页。",
        "开发集成第三方在线支付接口的电子商务购物网站。",
        "定制开发企业内部运营管理工具（餐饮/咖啡厅管理、仓储库存系统）。",
        "优化网页加载性能、全终端自适应（Responsive）设计及信息安全保护。"
      ],
      demoProject: "为拥有3家分店的连锁咖啡品牌定制开发门店运营管理 Web 系统。"
    },
    {
      title: "安防监控系统 (CCTV)",
      iconClass: "fa-solid fa-video",
      shortDesc: "提供具备大容量本地/云端存储和安全实时远程监控的综合视频监控解决方案。",
      capabilities: [
        "勘测现场并设计监控点位图，确保视频监控视角无死角盲区。",
        "为办公场所、仓库厂区安装部署高性价比智能防犯摄像头。",
        "基于 NVR（硬盘录像机）或内网 NAS 存储设计集中式视频存储备份方案。",
        "配置基于移动端及 PC 端的安全远程实时图像查看及回放系统。"
      ],
      demoProject: "为大型生产车间安装和调试包含32个监控点位的安防闭路监控系统。"
    },
    {
      title: "IT 硬件及办公设备供应",
      iconClass: "fa-solid fa-laptop",
      shortDesc: "一站式采购正品、高品质的员工办公电脑、服务器、网络设备及办公外设。",
      capabilities: [
        "供应企业办公电脑、专业设计笔记本、多功能打印机及各类周边外设。",
        "提供企业级物理服务器及交换机、路由器等专用网络物理设备。",
        "负责设备送货上门、系统安装调试（Kitting）及技术移交培训。",
        "提供原厂正品保修政策支持，并在发生硬件故障时提供快速技术响应。"
      ],
      demoProject: "为新成立的科技初创公司一站式配置20台办公电脑及内网网络硬件设备。"
    },
    {
      title: "数据分析与商业智能 (BI)",
      iconClass: "fa-solid fa-chart-line",
      shortDesc: "清洗和整合 Excel、ERP 系统中的散乱数据，构建动态可视化的 DWH 与决策看板。",
      capabilities: [
        "跨系统进行数据提取、名寄せ清洗与数据合并规范化处理。",
        "设计高度优化、具备强扩展性的数据仓库（Data Warehouse）模型。",
        "使用 Power BI 或开源 Metabase 搭建多维度的销售、运营 KPI 看板。",
        "深度挖掘业务数据，为管理层决策提供有力的数据支撑。"
      ],
      demoProject: "为连锁零售企业构建面向管理层的商业销售业绩 BI 可视化决策系统。"
    },
    {
      title: "业务数字化与 AI 结合",
      iconClass: "fa-solid fa-brain",
      shortDesc: "引领企业淘汰纸质审批，实现基于工作流自动化的无纸化办公与 AI 技术融合。",
      capabilities: [
        "定制开发电子表单（E-form）系统，彻底取代传统的纸质表单和线下审批。",
        "使用 n8n 开源工具与 Python 开发脚本，实现跨系统重复业务自动流转（RPA）。",
        "集成智能 AI 摄像头，实现人员考勤人脸识别及特定区域安全入侵报警。",
        "开发智能聊天机器人，用于处理常见客户咨询和企业内部信息检索。"
      ],
      demoProject: "通过 AI 技术与 n8n 自动化流程实现仓库货品出入库自动比对与核销。"
    }
  ]
};

// ==========================================================================
// RENDER DỮ LIỆU DỊCH VỤ DỰA TRÊN NGÔN NGỮ
// ==========================================================================
function renderServicesContent(lang) {
  const data = teamServicesData[lang] || teamServicesData.vi;
  const gridContainer = document.getElementById("services-grid-target");
  const cardTemplate = document.getElementById("service-card-template");

  if (gridContainer && cardTemplate) {
    gridContainer.innerHTML = ""; // Xóa dữ liệu cũ
    data.forEach(service => {
      const clone = cardTemplate.content.cloneNode(true);

      // Thiết lập thông tin cơ bản
      clone.querySelector(".service-title").textContent = service.title;
      clone.querySelector(".service-short-desc").textContent = service.shortDesc;
      clone.querySelector(".service-demo-project").textContent = service.demoProject;

      // Thiết lập Icon
      const iconEl = clone.querySelector(".service-icon-element");
      if (iconEl) {
        iconEl.className = service.iconClass;
      }

      // Render danh sách năng lực chi tiết
      const capabilitiesUl = clone.querySelector(".service-capabilities");
      if (capabilitiesUl) {
        service.capabilities.forEach(cap => {
          const li = document.createElement("li");
          li.textContent = cap;
          capabilitiesUl.appendChild(li);
        });
      }

      gridContainer.appendChild(clone);
    });
  }
}

// ==========================================================================
// THAY ĐỔI NGÔN NGỮ TRANG SERVICES (i18n Handler)
// ==========================================================================
function changeLanguage(lang) {
  if (!translations[lang]) lang = "vi";

  // 1. Render lại danh sách dịch vụ theo ngôn ngữ mới trước (để các phần tử động có data-i18n được chèn vào DOM)
  renderServicesContent(lang);

  // 2. Cập nhật các văn bản tĩnh trên trang (bao gồm cả các phần tử vừa render động)
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 3. Cập nhật các Placeholder input/textarea
  const placeholders = document.querySelectorAll("[data-placeholder]");
  placeholders.forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // 3.5 Cập nhật các title/aria-label cho các phần tử đặc biệt (ví dụ: nút Back to Top)
  const i18nTitles = document.querySelectorAll("[data-i18n-title]");
  i18nTitles.forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (translations[lang][key]) {
      el.setAttribute("title", translations[lang][key]);
      el.setAttribute("aria-label", translations[lang][key]);
    }
  });

  // 4. Cập nhật nút chọn hiển thị
  const currentLangText = document.getElementById("current-lang-text");
  if (currentLangText) {
    if (lang === "vi") currentLangText.textContent = "Tiếng Việt";
    else if (lang === "en") currentLangText.textContent = "English";
    else if (lang === "ja") currentLangText.textContent = "日本語";
    else if (lang === "zh") currentLangText.textContent = "中文";
  }

  // Active trạng thái ngôn ngữ được chọn trong dropdown menu
  document.querySelectorAll(".lang-option").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Lưu lựa chọn ngôn ngữ
  localStorage.setItem("language", lang);
  
  // Re-run scroll reveal to bind to new elements
  initScrollRevealObserver();
}

function initLanguageSelector() {
  const langOptions = document.querySelectorAll(".lang-option");
  langOptions.forEach(option => {
    option.addEventListener("click", (e) => {
      const selectedLang = e.target.getAttribute("data-lang");
      changeLanguage(selectedLang);
    });
  });

  // Load ngôn ngữ đã lưu hoặc mặc định là tiếng Việt
  const savedLang = localStorage.getItem("language") || "vi";
  changeLanguage(savedLang);
}

// ==========================================================================
// NÚT LÊN ĐẦU TRANG (BACK TO TOP)
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================================================
// CHUYỂN ĐỔI CHẾ ĐỘ SÁNG / TỐI (LIGHT/DARK THEME)
// ==========================================================================
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (!themeToggleBtn) return;
  const darkIcon = themeToggleBtn.querySelector(".theme-icon-dark");
  const lightIcon = themeToggleBtn.querySelector(".theme-icon-light");

  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-bs-theme", savedTheme);
  updateThemeIcons(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcons(newTheme);
  });

  function updateThemeIcons(theme) {
    if (theme === "dark") {
      darkIcon.classList.add("d-none");
      lightIcon.classList.remove("d-none");
    } else {
      lightIcon.classList.add("d-none");
      darkIcon.classList.remove("d-none");
    }
  }
}

// ==========================================================================
// HIỆU ỨNG NAV SCROLLED & HOẠT ẢNH KHI CUỘN TRANG (SCROLL REVEAL)
// ==========================================================================
let revealObserver = null;

function initScrollEffects() {
  const navbar = document.getElementById("main-navbar");

  // Navbar Scrolled Effect
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  initScrollRevealObserver();
}

function initScrollRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  const revealElements = document.querySelectorAll(".scroll-reveal");

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -20px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ==========================================================================
// HÀM KHỞI CHẠY CHÍNH (ON DOM LOAD)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initLanguageSelector(); // Chạy i18n & Render dynamic data
  initScrollEffects();
  initBackToTop();
});
