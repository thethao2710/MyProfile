/**
 * PORTFOLIO JAVASCRIPT
 * Developer: Nguyễn Thế Thảo
 * Assistant: JARVIS AI
 */

// ==========================================================================
// TỪ ĐIỂN DỊCH THUẬT TĨNH (i18n)
// ==========================================================================
const translations = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.skills": "Kỹ năng",
    "nav.contact": "Liên hệ",
    "hero.badge": "Chào mừng bạn đến với portfolio của tôi",
    "hero.iam": "Tôi là",
    "hero.expert": "Chuyên gia",
    "hero.description": "Với hơn 8 năm kinh nghiệm quản trị và vận hành hệ thống IT, MES/ERP và hạ tầng mạng trong môi trường sản xuất công nghệ cao. Định hướng thúc đẩy chuyển đổi số, tối ưu hóa quy trình doanh nghiệp và xây dựng đội ngũ IT hiệu suất cao.",
    "hero.btnContact": "Liên hệ ngay",
    "hero.btnExperience": "Xem kinh nghiệm",
    "about.title": "GIỚI THIỆU BẢN THÂN",
    "about.personalInfo": "Thông tin cá nhân",
    "about.yob": "Năm sinh",
    "about.phone": "Điện thoại",
    "about.email": "Thư điện tử",
    "about.address": "Địa điểm làm việc",
    "about.marital": "Tình trạng hôn nhân",
    "about.objective": "Mục tiêu nghề nghiệp",
    "about.obj1": "Mong muốn phát triển sự nghiệp trong môi trường chuyên nghiệp, nơi tôi có thể phát huy tối đa khả năng quản lý hệ thống, kỹ năng lãnh đạo và tư duy đổi mới sáng tạo.",
    "about.obj2": "Cam kết đóng góp hết mình cho sự ổn định hệ thống, an toàn dữ liệu và tối ưu hóa hạ tầng mạng để gia tăng hiệu suất sản xuất của doanh nghiệp.",
    "about.stat1": "Năm kinh nghiệm",
    "about.stat2": "Uptime hệ thống",
    "about.stat3": "Thành viên đội ngũ",
    "experience.title": "KINH NGHIỆM LÀM VIỆC",
    "projects.title": "DỰ ÁN TIÊU BIỂU",
    "skills.title": "NĂNG LỰC & HỌC VẤN",
    "skills.workskills": "Kỹ năng làm việc",
    "skills.education": "Học vấn",
    "skills.degree": "Cử nhân Điện tử Viễn thông",
    "skills.school": "Trường ĐH Khoa học Tự nhiên TP. HCM",
    "skills.languages": "Ngoại ngữ",
    "skills.japanese": "Tiếng Nhật",
    "skills.japaneseLevel": "JLPT N3 / Giao tiếp N2",
    "skills.english": "Tiếng Anh",
    "skills.englishLevel": "Đọc hiểu tài liệu kỹ thuật",
    "skills.hobbies": "Sở thích cá nhân",
    "skills.hobbyRead": "Đọc sách",
    "skills.hobbyTravel": "Du lịch",
    "skills.hobbyMusic": "Nghe nhạc",
    "skills.hobbySocial": "Giao lưu xã hội",
    "contact.title": "LIÊN HỆ",
    "contact.qrTitle": "Kết nối di động",
    "contact.qrDesc": "Quét mã QR bằng thiết bị di động để truy cập nhanh phiên bản trực tuyến của portfolio này.",
    "contact.infoTitle": "Thông tin liên lạc",
    "contact.infoDesc": "Hãy kết nối với tôi để trao đổi cơ hội hợp tác hoặc thảo luận giải pháp công nghệ.",
    "contact.phone": "Điện thoại",
    "contact.email": "Thư điện tử",
    "contact.address": "Địa chỉ hiện tại",
    "contact.formTitle": "Gửi tin nhắn trực tiếp",
    "contact.formName": "Họ và tên",
    "contact.formEmail": "Địa chỉ email",
    "contact.formSubject": "Tiêu đề",
    "contact.formMessage": "Nội dung",
    "contact.placeholderName": "Họ và tên của bạn",
    "contact.placeholderEmail": "name@example.com",
    "contact.placeholderSubject": "Tiêu đề tin nhắn",
    "contact.placeholderMessage": "Nhập tin nhắn của bạn tại đây...",
    "contact.btnSubmit": "Gửi tin nhắn",
    "contact.sending": "Đang gửi tin nhắn...",
    "contact.success": "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể.",
    "footer.copyright": "© 2026 Nguyễn Thế Thảo. Bảo lưu mọi quyền.",
    "footer.designer": "Thiết kế bởi JARVIS AI với sự chỉn chu và tinh tế cao nhất."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.badge": "Welcome to my portfolio",
    "hero.iam": "I am",
    "hero.expert": "Expert in",
    "hero.description": "Over 8 years of experience managing and operating IT systems, MES/ERP, and network infrastructure in high-tech manufacturing environments. Dedicated to driving digital transformation, process optimization, and building high-performance IT teams.",
    "hero.btnContact": "Contact me",
    "hero.btnExperience": "View experience",
    "about.title": "ABOUT ME",
    "about.personalInfo": "Personal information",
    "about.yob": "Year of birth",
    "about.phone": "Phone",
    "about.email": "Email",
    "about.address": "Work location",
    "about.marital": "Marital status",
    "about.objective": "Career objective",
    "about.obj1": "With solid experience in IT systems management, I aim to contribute to the organization by leading system optimization, driving digital transformation, and delivering stable and scalable solutions.",
    "about.obj2": "Committed to ensuring system stability, information security, and network optimization to maximize production efficiency.",
    "about.stat1": "Years of experience",
    "about.stat2": "System uptime",
    "about.stat3": "Team members",
    "experience.title": "WORK EXPERIENCE",
    "projects.title": "KEY PROJECTS",
    "skills.title": "SKILLS & EDUCATION",
    "skills.workskills": "Professional skills",
    "skills.education": "Education",
    "skills.degree": "Bachelor's Degree in Electronics and Telecommunications",
    "skills.school": "University of Science, VNU-HCM",
    "skills.languages": "Languages",
    "skills.japanese": "Japanese",
    "skills.japaneseLevel": "JLPT N3 / Business level N2 equivalent",
    "skills.english": "English",
    "skills.englishLevel": "Read and understand technical docs",
    "skills.hobbies": "Hobbies",
    "skills.hobbyRead": "Reading books",
    "skills.hobbyTravel": "Traveling",
    "skills.hobbyMusic": "Music",
    "skills.hobbySocial": "Social networking",
    "contact.title": "CONTACT",
    "contact.qrTitle": "Mobile Connection",
    "contact.qrDesc": "Scan the QR code with your mobile device to quickly access the online version of this portfolio.",
    "contact.infoTitle": "Contact info",
    "contact.infoDesc": "Feel free to reach out to me for collaboration opportunities or technology discussions.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Current address",
    "contact.formTitle": "Send a message",
    "contact.formName": "Full name",
    "contact.formEmail": "Email address",
    "contact.formSubject": "Subject",
    "contact.formMessage": "Message",
    "contact.placeholderName": "Your full name",
    "contact.placeholderEmail": "name@example.com",
    "contact.placeholderSubject": "Message subject",
    "contact.placeholderMessage": "Type your message here...",
    "contact.btnSubmit": "Send message",
    "contact.sending": "Sending message...",
    "contact.success": "Thank you! Your message has been sent successfully. I will get back to you as soon as possible.",
    "footer.copyright": "© 2026 Nguyen The Thao. All rights reserved.",
    "footer.designer": "Designed by JARVIS AI with the highest precision and sophistication."
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "自己紹介",
    "nav.experience": "職歴",
    "nav.projects": "プロジェクト",
    "nav.skills": "スキル・学歴",
    "nav.contact": "お問い合わせ",
    "hero.badge": "ポートフォリオへようこそ",
    "hero.iam": "私は",
    "hero.expert": "専門分野：",
    "hero.description": "ハイテク製造環境におけるITシステム、MES/ERP、ネットワークインフラの管理・運用に8年以上の経験を持ちます。デジタルトランスフォーメーションの推進、業務プロセスの最適化、および高度なITチームの構築に尽力しています。",
    "hero.btnContact": "連絡する",
    "hero.btnExperience": "職歴を見る",
    "about.title": "自己紹介",
    "about.personalInfo": "個人情報",
    "about.yob": "生年",
    "about.phone": "電話番号",
    "about.email": "メールアドレス",
    "about.address": "勤務地",
    "about.marital": "配偶者の有無",
    "about.objective": "キャリア目標",
    "about.obj1": "ITシステム管理における確かな経験を活かし、システムの最適化を主導し、デジタルトランスフォーメーションを推進し、安定して拡張性のあるソリューションを提供することで、組織に貢献することを目指します。",
    "about.obj2": "生産効率を最大化するために、システムの安定稼働、情報セキュリティの確保、およびネットワークの最適化に全力を尽くします。",
    "about.stat1": "実務経験年数",
    "about.stat2": "システム稼働率",
    "about.stat3": "チームメンバー数",
    "experience.title": "職歴・経歴",
    "projects.title": "主なプロジェクト",
    "skills.title": "スキルと学歴",
    "skills.workskills": "実務スキル",
    "skills.education": "学歴",
    "skills.degree": "電子通信工学士",
    "skills.school": "ホーチミン市国家大学自然科学大学",
    "skills.languages": "語学力",
    "skills.japanese": "日本語",
    "skills.japaneseLevel": "JLPT N3 / ビジネス会話N2相当",
    "skills.english": "英語",
    "skills.englishLevel": "技術文書の読み書き・読解可能",
    "skills.hobbies": "趣味",
    "skills.hobbyRead": "読書",
    "skills.hobbyTravel": "旅行",
    "skills.hobbyMusic": "音楽鑑賞",
    "skills.hobbySocial": "社交活動",
    "contact.title": "連絡先",
    "contact.qrTitle": "モバイル接続",
    "contact.qrDesc": "スマートフォンでQRコードをスキャンして、このポートフォリオのオンライン版に素早くアクセスできます。",
    "contact.infoTitle": "お問い合わせ先",
    "contact.infoDesc": "協業のご提案や技術的なディスカッションなど、お気軽にご連絡ください。",
    "contact.phone": "電話番号",
    "contact.email": "メールアドレス",
    "contact.address": "現住所",
    "contact.formTitle": "お問い合わせフォーム",
    "contact.formName": "お名前",
    "contact.formEmail": "メールアドレス",
    "contact.formSubject": "件名",
    "contact.formMessage": "本文",
    "contact.placeholderName": "お名前を入力してください",
    "contact.placeholderEmail": "name@example.com",
    "contact.placeholderSubject": "件名を入力してください",
    "contact.placeholderMessage": "こちらにメッセージを入力してください...",
    "contact.btnSubmit": "送信する",
    "contact.sending": "送信中...",
    "contact.success": "ありがとうございます！メッセージは正常に送信されました。できるだけ早くご返信いたします。",
    "footer.copyright": "© 2026 グエン・テー・タオ. All rights reserved.",
    "footer.designer": "JARVIS AIによって極めて緻密かつ洗練されたデザインで設計されました。"
  }
};

// ==========================================================================
// DỮ LIỆU ĐA NGÔN NGỮ (VI - EN - JA)
// ==========================================================================
const profileData = {
  vi: {
    ageText: "1992 (Tuổi: 34)",
    addressVal: "TP. Hồ Chí Minh & Đồng Nai",
    maritalVal: "Đã kết hôn",
    contactAddressVal: "Thuận Giao, TP. HCM (Bình Dương)",
    experiences: [
      {
        companyName: "Công ty TNHH Sharp Manufacturing Việt Nam",
        role: "Trưởng phòng IT (Khối sản xuất)",
        period: "04/2021 – Hiện tại",
        location: "TP. HCM (Bình Dương)",
        duties: [
          "Quản lý và vận hành tổng thể hệ thống MES/ERP: bao gồm hạ tầng mạng, máy chủ, cơ sở dữ liệu và hệ thống điều khiển sản xuất, đảm bảo hoạt động ổn định 99.9% uptime, đáp ứng yêu cầu sản xuất liên tục 24/7.",
          "Lãnh đạo cải tiến và phát triển hệ thống: phân tích yêu cầu nghiệp vụ, xây dựng tài liệu đặc tả (spec), tổ chức phát triển, kiểm thử và triển khai các nâng cấp (server, ứng dụng, hệ thống điều khiển).",
          "Thiết kế và chuẩn hóa quy trình IT & sản xuất: xây dựng, triển khai và tối ưu quy trình vận hành, đảm bảo tuân thủ tiêu chuẩn ISO/IATF.",
          "Quản lý và phát triển hạ tầng IT: triển khai, mở rộng và tối ưu hệ thống mạng (L2/L3 Switch, Firewall, Router, WiFi), đảm bảo hiệu năng và an toàn thông tin.",
          "Xây dựng và vận hành hệ thống quản lý dữ liệu sản xuất: quản lý database, log hệ thống, dữ liệu hình ảnh sản phẩm; thiết kế giải pháp backup & recovery đảm bảo an toàn dữ liệu.",
          "Phát triển giải pháp nội bộ: xây dựng ứng dụng và công cụ hỗ trợ giúp tối ưu vận hành, nâng cao năng suất và giảm thiểu thao tác thủ công.",
          "Thúc đẩy chuyển đổi số: nghiên cứu và áp dụng các công nghệ mới (AI, Automation, Open-source) nhằm nâng cao hiệu quả sản xuất và quản trị.",
          "Quản lý và xử lý sự cố hệ thống sản xuất: đảm bảo phản ứng nhanh, giảm thiểu downtime, duy trì hoạt động liên tục.",
          "Điều phối và làm việc với đối tác quốc tế (Nhật Bản) và vendor trong triển khai, vận hành và xử lý sự cố hệ thống.",
          "Quản lý đội ngũ IT: phân công công việc, đào tạo, phát triển năng lực nhân sự và xây dựng team hiệu quả gồm 9 nhân sự."
        ]
      },
      {
        companyName: "Công ty Cổ phần Nhân lực Quốc tế Việt",
        role: "Chuyên viên IT",
        period: "12/2018 – 06/2020",
        location: "TP. HCM",
        duties: [
          "Phát triển và duy trì trang web công ty, triển khai các giải pháp Internet Marketing nhằm nâng cao nhận diện thương hiệu.",
          "Quản trị hệ thống máy tính, thiết bị ngoại vi và hạ tầng mạng nội bộ, đảm bảo tính sẵn sàng và an toàn dữ liệu.",
          "Đào tạo, hỗ trợ kỹ thuật và hướng dẫn sử dụng phần mềm văn phòng cho cán bộ nhân viên.",
          "Biên dịch tài liệu kỹ thuật, hỗ trợ đối tác Nhật Bản trong quá trình chuyển giao công nghệ và cấu hình hệ thống."
        ]
      },
      {
        companyName: "Ngân hàng TMCP Đông Á",
        role: "Chuyên viên IT vận hành hệ thống ứng dụng",
        period: "06/2018 – 03/2019",
        location: "TP. HCM",
        duties: [
          "Giám sát, vận hành hệ thống máy chủ (Core Banking, Card, Internet Banking, v.v.) đảm bảo hệ thống hoạt động ổn định, liên tục 24/7 không xảy ra sự cố thanh toán, rút tiền.",
          "Triển khai các thay đổi, nâng cấp hệ thống đáp ứng yêu cầu của hệ thống ngân hàng.",
          "Triển khai các dự án mới, hệ thống mới (hệ thống thanh toán quốc tế SWIFT).",
          "Nghiên cứu và triển khai các giải pháp công nghệ mới nhằm tối ưu hệ thống."
        ]
      },
      {
        companyName: "Công ty TNHH Washin Aluminum",
        role: "Kỹ thuật viên - Vận hành máy tự động",
        period: "03/2015 – 03/2018",
        location: "Osaka, Nhật Bản",
        duties: [
          "Làm việc trực tiếp tại Nhật Bản, chịu trách nhiệm vận hành máy móc tự động hóa sản xuất.",
          "Đảm bảo an toàn lao động và duy trì quy trình sản xuất liên tục đạt chuẩn chất lượng Nhật Bản."
        ]
      }
    ],
    projects: [
      {
        title: "Hệ thống lưu trữ hình ảnh dung lượng lớn (NAS)",
        duration: "3 tháng",
        details: [
          "Thiết kế và triển khai hệ thống lưu trữ hình ảnh quy mô lớn sử dụng NAS Synology (10PB).",
          "Xây dựng hạ tầng mạng băng thông cao 10Gbps phục vụ truyền tải dữ liệu thời gian thực.",
          "Tối ưu ứng dụng xử lý thời gian thực (real-time) bằng Golang, nâng cao hiệu năng và tốc độ xử lý dữ liệu."
        ],
        technologies: ["NAS Synology", "Golang", "Network 10Gbps", "Real-time Storage"]
      },
      {
        title: "Hệ thống báo cáo sản xuất BI",
        duration: "4 tháng",
        details: [
          "Thiết kế và triển khai nền tảng BI sử dụng công nghệ mã nguồn mở (Docker), tối ưu chi phí đầu tư.",
          "Xây dựng kiến trúc Data Warehouse tập trung, phục vụ phân tích dữ liệu sản xuất.",
          "Phát triển Dashboard trực quan, hỗ trợ theo dõi KPI và ra quyết định nhanh chóng."
        ],
        technologies: ["Docker", "Data Warehouse", "Power BI / Metabase", "SQL Server"]
      },
      {
        title: "Triển khai hệ thống AI nội bộ",
        duration: "Đang triển khai",
        details: [
          "Xây dựng mô hình AI Local chạy nội bộ, đảm bảo bảo mật và an toàn thông tin doanh nghiệp.",
          "Ứng dụng AI trong dịch thuật, phân tích tài liệu và chuẩn hóa quy trình vận hành.",
          "Tự động hóa nghiệp vụ và quản lý sản xuất bằng AI kết hợp n8n.",
          "Phát triển Chatbot hỗ trợ nội bộ và lập trình, tối ưu thời gian phát triển hệ thống."
        ],
        technologies: ["Local AI", "n8n", "Chatbot Development", "Python", "Automation"]
      },
      {
        title: "Nâng cấp hệ thống mạng nhà máy",
        duration: "Đã hoàn thành",
        details: [
          "Lập kế hoạch ngân sách, tiến độ và quản lý triển khai dự án nâng cấp mạng toàn bộ nhà máy.",
          "Mở rộng hạ tầng mạng phục vụ thêm dây chuyền sản xuất mà không ảnh hưởng đến hệ thống hiện tại.",
          "Định hướng kiến trúc mạng dài hạn phục vụ chuyển đổi số và smart factory."
        ],
        technologies: ["L2/L3 Switches", "Firewall", "Fiber Networks", "Industrial Wifi"]
      },
      {
        title: "Vận hành hệ thống MES/ERP",
        duration: "Liên tục",
        details: [
          "Đảm bảo hệ thống MES vận hành ổn định đạt uptime 99.9% cho sản xuất 24/7.",
          "Xử lý sự cố và phản ứng nhanh trong vòng 8 giờ, bao gồm ngày nghỉ và ngoài giờ làm việc.",
          "Hỗ trợ chuyển đổi ứng dụng Sharp ERP sang SAP ERP-ECC 6.0 (đang triển khai)."
        ],
        technologies: ["MES", "ERP Sharp", "SAP ERP-ECC 6.0", "MSSQL"]
      },
      {
        title: "Quản lý dự án và nhân sự",
        duration: "Liên tục",
        details: [
          "Quản lý phòng IT gồm 9 nhân sự, tổ chức thành 3 nhóm chức năng: Vận hành, Phát triển và Cải tiến.",
          "Phân công công việc, quản lý hiệu suất và đào tạo, phát triển đội ngũ kế cận.",
          "Phối hợp chặt chẽ với Ban Giám đốc, nhà sản xuất và nhà cung cấp để triển khai các dự án."
        ],
        technologies: ["Agile/Scrum", "Team Leadership", "KPI Management", "Vendor Coordination"]
      }
    ],
    skills: [
      {
        groupName: "Quản lý & Lãnh đạo",
        description: "Có khả năng dẫn dắt, truyền cảm hứng và xây dựng đội ngũ IT đoàn kết, hiệu quả. Lập kế hoạch và điều phối nguồn lực, đảm bảo đúng tiến độ và ngân sách dự án. Giao tiếp tốt, tự tin, có tinh thần cầu tiến bằng tiếng Việt và tiếng Nhật."
      },
      {
        groupName: "Hệ thống MES/ERP & Cơ sở dữ liệu",
        description: "Hơn 5 năm kinh nghiệm trực tiếp quản lý, tối ưu hóa hệ thống MES/ERP sản xuất. Thiết kế giải pháp sao lưu và khôi phục dữ liệu tự động, vận hành hệ thống cơ sở dữ liệu lớn SQL Server, phân tích dữ liệu BI."
      },
      {
        groupName: "Hạ tầng mạng & Bảo mật",
        description: "Thiết kế, mở rộng hệ thống mạng công nghiệp phức tạp (Routing, Switching L2/L3, Firewall Sophos/Fortinet, Wi-Fi công nghiệp). Tối ưu hóa băng thông truyền tải dữ liệu dung lượng lớn (10Gbps) và đảm bảo an toàn thông tin hệ thống."
      },
      {
        groupName: "Chuyển đổi số & AI nội bộ",
        description: "Đóng vai trò tiên phong trong việc nghiên cứu và triển khai các công nghệ mới bao gồm Trí tuệ nhân tạo (Local AI), tự động hóa quy trình với n8n/Python và phát triển ứng dụng tối ưu hóa vận hành nhà máy bằng Golang."
      }
    ]
  },
  en: {
    ageText: "1992 (Age: 34)",
    addressVal: "Ho Chi Minh City & Dong Nai",
    maritalVal: "Married (2 children)",
    contactAddressVal: "Thuan Giao, HCMC",
    experiences: [
      {
        companyName: "Sharp Manufacturing Vietnam Co., Ltd.",
        role: "IT Manager (Manufacturing Environment)",
        period: "04/2021 – Present",
        location: "Binh Duong",
        duties: [
          "Managed and operated end-to-end MES/ERP systems, including network infrastructure, servers, databases, and production control systems, ensuring 99.9% uptime to support continuous 24/7 manufacturing operations.",
          "Led system enhancement and development initiatives: analyzed business requirements, prepared technical specifications, and managed development, testing, and deployment of system upgrades (servers, applications, control systems).",
          "Designed and standardized IT and production processes: developed, implemented, and optimized operational workflows in compliance with ISO/IATF standards.",
          "Managed and developed IT infrastructure: deployed, expanded, and optimized network systems (L2/L3 switches, firewalls, routers, Wi-Fi), ensuring performance and information security.",
          "Designed and operated production data management systems: managed databases, system logs, and product image data; implemented backup and recovery solutions to ensure data integrity and security.",
          "Developed internal solutions and tools to streamline operations, improve productivity, and reduce manual workloads.",
          "Drove digital transformation initiatives by researching and applying new technologies (AI, automation, open-source solutions) to enhance production efficiency and management.",
          "Managed and resolved production system incidents, ensuring rapid response, minimizing downtime, and maintaining continuous operations.",
          "Coordinated with international stakeholders (Japan) and vendors for system implementation, operation, and issue resolution.",
          "Led and managed the IT team: assigned tasks, provided training, developed team capabilities, and built a high-performing team of 9 members."
        ]
      },
      {
        companyName: "VILACO International Human Resources Co., Ltd.",
        role: "IT Specialist & Technology Transfer Support (Part-time)",
        period: "12/2018 – 06/2020",
        location: "HCMC",
        duties: [
          "Developed and maintained the corporate websites and optimized search engine presence (SEO).",
          "Managed local network infrastructure, endpoint security, and backup systems.",
          "Provided technical support, troubleshooting, and software training for internal staff.",
          "Translated technical documents and facilitated IT system transitions for Japanese partners."
        ]
      },
      {
        companyName: "Dong A Bank",
        role: "IT Engineer – System Operations",
        period: "06/2018 – 03/2019",
        location: "HCMC",
        duties: [
          "Responsible for managing and operating IT systems to ensure servers and network infrastructure run stably without interruptions 24/7.",
          "Performed data backup and installed applications for internal systems.",
          "Improved system performance and efficiency by optimizing existing systems and deploying new solutions (such as SWIFT payment gateway)."
        ]
      },
      {
        companyName: "Washin Aluminum Co., Ltd. (Japan)",
        role: "Technical Intern – Automatic Machine Operation",
        period: "03/2015 – 03/2018",
        location: "Osaka, Japan",
        duties: [
          "Operated and monitored automated production machines to ensure stable manufacturing processes.",
          "Followed operational procedures and safety standards in the production environment."
        ]
      }
    ],
    projects: [
      {
        title: "Large-Scale Image Storage System (NAS)",
        duration: "3 months",
        details: [
          "Designed and implemented a large-scale image storage system using Synology NAS (10PB).",
          "Built high-bandwidth network infrastructure (10Gbps) to support real-time data transmission.",
          "Optimized real-time processing applications using Golang, improving system performance and throughput."
        ],
        technologies: ["NAS Synology", "Golang", "10Gbps Network", "Real-time Storage"]
      },
      {
        title: "Production BI Reporting System",
        duration: "4 months",
        details: [
          "Implemented an open-source BI platform on Docker, optimizing investment and operating costs.",
          "Analyzed business data and designed a Data Warehouse architecture for centralized reporting.",
          "Developed interactive dashboards to support KPI monitoring and production management."
        ],
        technologies: ["Docker", "Data Warehouse", "Power BI / Metabase", "SQL Server"]
      },
      {
        title: "Internal AI System Implementation",
        duration: "In progress",
        details: [
          "Built and deployed an on-premises local AI environment to ensure enterprise data security.",
          "Applied AI for translation, document analysis, and operational process standardization.",
          "Automated business workflows and production management using AI integrated with n8n."
        ],
        technologies: ["Local AI", "n8n", "Chatbot Development", "Python", "Automation"]
      },
      {
        title: "Factory Network Upgrade Project",
        duration: "Completed",
        details: [
          "Managed budget, timeline, and implementation of factory network upgrade.",
          "Expanded network capacity for new production lines without disrupting existing operations.",
          "Designed long-term network architecture for digital transformation and smart factory."
        ],
        technologies: ["L2/L3 Switches", "Firewall", "Fiber Networks", "Industrial Wifi"]
      },
      {
        title: "MES/ERP System Operations",
        duration: "Continuous",
        details: [
          "Maintained MES system availability at 99.9% to support continuous production.",
          "Responded to incidents within 8 hours, including weekends, holidays, and after-hours.",
          "Supported the migration from Sharp ERP to SAP ERP ECC 6.0 (currently in progress)."
        ],
        technologies: ["MES", "ERP Sharp", "SAP ERP-ECC 6.0", "MSSQL"]
      },
      {
        title: "Project & Team Management",
        duration: "Continuous",
        details: [
          "Managed an IT department of 9 members across Operations, Development, and Improvement teams.",
          "Assigned tasks, managed performance, and developed team capabilities.",
          "Collaborated closely with management, production, engineering, and vendors."
        ],
        technologies: ["Agile/Scrum", "Team Leadership", "KPI Management", "Vendor Coordination"]
      }
    ],
    skills: [
      {
        groupName: "Leadership & Team Management",
        description: "Experienced in leading teams, managing projects, and aligning IT strategies with business goals. Excellent communication skills in Vietnamese and Japanese."
      },
      {
        groupName: "IT Systems & Database Management",
        description: "Solid background in MES/ERP systems optimization. Proficient in database administration, backup & recovery strategies, and BI reporting."
      },
      {
        groupName: "Network Infrastructure & Security",
        description: "Specialized in enterprise network design (L2/L3 routing/switching, industrial Wi-Fi, firewalls). Optimizing 10Gbps data transport and cybersecurity."
      },
      {
        groupName: "Digital Transformation & AI Solutions",
        description: "Driving manufacturing efficiency by implementing local AI, automating workflows with n8n, and coding custom utilities in Python/Golang."
      }
    ]
  },
  ja: {
    ageText: "1992年生まれ (34歳)",
    addressVal: "ホーチミン市 ＆ ドンナイ省",
    maritalVal: "既婚 (子供2人)",
    contactAddressVal: "ベトナム ホーチミン市 (Thuận Giao)",
    experiences: [
      {
        companyName: "シャープ・マニュファクチャリング・ベトナム (Sharp Manufacturing Vietnam Co., Ltd.)",
        role: "ITマネージャー (製造部門責任者)",
        period: "2021年04月 – 現在",
        location: "ビンズン省",
        duties: [
          "MES/ERPシステムの総合管理・運用：ネットワークインフラ, サーバー, データベース, 生産制御システムを含め、24時間365日の連続稼働を実現し、稼働率99.9%以上を維持。",
          "システムの改善・開発の主導：業務要件定義、仕様書(Spec)の作成、開発・テスト体制の構築、およびサーバー・アプリケーション・制御システムのアップグレードの適用。",
          "IT・生産プロセスの標準化：ISO/IATF標準に準拠した運用フローの構築と最適化の推進。",
          "ITインフラの設計・管理：L2/L3スイッチ、ファイアウォール、ルーター、産業用Wi-Fiなど、工場全体のネットワークインフラの構築とセキュリティ最適化。",
          "生産データ管理システムの運用：データベースの保守、ログ管理、製品画像データのバックアップおよび災害復旧対策の確立。",
          "社内ソリューションの開発：工場内の業務効率化、手作業の削減、生産性向上のためのツールや連携アプリの作成。",
          "デジタルトランスフォーメーション (DX) の推進：ローカルAI、自動化ツール(n8n)、オープンソースソフトウェア(OSS)などの先進技術の調査と現場への導入。",
          "トラブルシューティングと迅速対応：生産ラインのダウンタイムを最小限に抑えるための障害監視および即時復旧体制の指揮。",
          "グローバル連携とベンダーコントロール：日本側の関係者や国内外のITベンダーとの要件定義、導入・運用調整および問題解決の円滑な進行。",
          "ITチームマネジメント：9名規模のIT部門（運用・開発・改善チーム）のタスク割り当て、人事評価、人材育成、および高パフォーマンスなチームの構築。"
        ]
      },
      {
        companyName: "越日国際人材株式会社 (VILACO International)",
        role: "ITスペシャリスト ＆ 技術移転サポート (非常勤)",
        period: "2018年12月 – 2020年06月",
        location: "ホーチミン市",
        duties: [
          "社内Webサイトの構築・保守運用、およびデジタルマーケティング体制の強化。",
          "社内のネットワークインフラ、周辺機器の保守管理、およびセキュリティ保護とデータバックアップ。",
          "社員向けITサポート、トラブルシューティング、およびOfficeソフト操作のトレーニングの実施。",
          "IT関連技術仕様書の翻訳、および日本側パートナーとのシステム移行・技術移転における調整・技術支援。"
        ]
      },
      {
        companyName: "東亜銀行 (Dong A Bank)",
        role: "ITシステム運用スペシャリスト",
        period: "2018年06月 – 2019年03月",
        location: "ホーチミン市",
        duties: [
          "勘定系システム(Core Banking)、決済・カードシステム、インターネットバンキング等のサーバー監視・運用を行い、24/7の安定稼働とトラブルフリーを維持。",
          "銀行の高度な要件に合わせたシステムパッチの適用、構成変更、およびハードウェア増設の実施。",
          "国際決済ネットワーク（SWIFTシステム）導入などの新規プロジェクト実行の技術サポート。",
          "運用プロセスの効率化を目指した、新しいインフラ技術および自動化監視スクリプトの評価と導入。"
        ]
      },
      {
        companyName: "和信アルミ株式会社 (Washin Aluminum Co., Ltd.)",
        role: "技術インターン – 自動化機械オペレーター",
        period: "2015年03月 – 2018年03月",
        location: "日本国 大阪府",
        duties: [
          "日本への技術実習生として派遣され、最先端のアルミ製造ラインの自動化設備の操作および稼働監視を担当。",
          "日本の厳格な安全基準と「5S」活動を遵守し、高い生産品質と無事故運転に貢献。"
        ]
      }
    ],
    projects: [
      {
        title: "大容量画像ストレージシステム (NAS)",
        duration: "3ヶ月",
        details: [
          "Synology NAS (10PB) を使用した、大規模な製品画像ストレージシステムの設計および導入。",
          "リアルタイムデータ伝送を支える10Gbps高速ネットワークインフラの構築。",
          "Golangを使用してリアルタイム処理アプリケーションを最適化し、データ処理能力を向上。"
        ],
        technologies: ["NAS Synology", "Golang", "10Gbps Network", "Real-time Storage"]
      },
      {
        title: "生産BIレポートシステム",
        duration: "4ヶ月",
        details: [
          "Docker上で動作するオープンソースBIプラットフォームを導入し、インフラ投資と運用コストを削減。",
          "生産データを分析し、中央集計レポート用のデータウェアハウス (DWH) アーキテクチャを設計。",
          "工場のKPI分析と意思決定の迅速化を支える、直感的なダッシュボード画面の開発。"
        ],
        technologies: ["Docker", "Data Warehouse", "Power BI / Metabase", "SQL Server"]
      },
      {
        title: "社内AIシステムの導入",
        duration: "進行中",
        details: [
          "セキュリティと企業秘匿情報を保護するため、オンプレミス環境で動作する「ローカルAI」を構築。",
          "翻訳、文書分析、および業務標準化のためのAIモデル適用プロセスの確立。",
          "n8nワークフローとの連携による、日常のルーティン業務の自動化プログラム構築。"
        ],
        technologies: ["Local AI", "n8n", "Chatbot Development", "Python", "Automation"]
      },
      {
        title: "工場ネットワークの全面アップグレード",
        duration: "完了",
        details: [
          "工場ネットワークの更新における予算、スケジュール、および物理的な敷設工事の管理。",
          "既存ラインの稼働を一切止めずに、新しい製造ライン用のネットワーク容量を拡張。",
          "スマートファクトリー化とDX推進を見据えた、将来性の高い物理・論理ネットワーク設計の採用。"
        ],
        technologies: ["L2/L3 Switches", "Firewall", "Fiber Networks", "Industrial Wifi"]
      },
      {
        title: "MES/ERPシステムの運用管理",
        duration: "継続中",
        details: [
          "24時間体制の製造現場を支えるため、MESシステムの稼働率99.9%以上を維持管理。",
          "夜間・休日等の緊急障害発生時に、8時間以内に障害復旧を行う障害対応体制の運用。",
          "シャープ独自のERPシステムからSAP ERP-ECC 6.0へのシステム移行プロジェクトの推進。"
        ],
        technologies: ["MES", "ERP Sharp", "SAP ERP-ECC 6.0", "MSSQL"]
      },
      {
        title: "プロジェクトと組織のマネジメント",
        duration: "継続中",
        details: [
          "運用・開発・改善の3つの小チームからなる計9名のITエンジニア組織のマネジメント。",
          "チームごとのKPI管理、個人の目標設定、および技術教育を通じた後継者の育成。",
          "経営層、生産技術、製造現場、および国内外の外部ベンダーとの確実な意思疎通による円滑なプロジェクト遂行。"
        ],
        technologies: ["Agile/Scrum", "Team Leadership", "KPI Management", "Vendor Coordination"]
      }
    ],
    skills: [
      {
        groupName: "マネジメントとリーダーシップ",
        description: "ITエンジニア組織をまとめ、協調性と当事者意識を高めるチームビルディングの実績。プロジェクトの予算・進行管理、日本側関係者やベンダーとの円滑なコミュニケーション能力（日越両対応）。"
      },
      {
        groupName: "MES/ERP ＆ データベース",
        description: "工場のMES/ERPおよび基幹システムの運用管理に5年以上の経験。SQL Serverでの大規模データのパフォーマンスチューニング、DWH設計、自動バックアップと復旧シナリオの構築技術。"
      },
      {
        groupName: "ネットワークとセキュリティ",
        description: "産業用ルーティング・スイッチング(L2/L3)、ファクトリーWiFi、および次世代FWの設計構築。10Gbps伝送システム最適化と、物理的・論理的ネットワークセキュリティ対策の実装。"
      },
      {
        groupName: "DX推進 ＆ AIソリューション",
        description: "製造業の変革を見据えた先進技術の評価・実装。ローカルLLM/AIの環境構築、n8nによる自動化、Python/Golangによるカスタムユーティリティ開発スキルの保持。"
      }
    ]
  }
};

// ==========================================================================
// RENDER DỮ LIỆU ĐỘNG THEO NGÔN NGỮ
// ==========================================================================
function renderDynamicContent(lang) {
  const data = profileData[lang] || profileData.vi;

  // 1. Render Thông tin cá nhân cơ bản
  const ageEl = document.getElementById("personal-age-text");
  const addressEl = document.getElementById("personal-address-val");
  const maritalEl = document.getElementById("personal-marital-val");
  const contactAddressEl = document.getElementById("contact-address-val");

  if (ageEl) ageEl.textContent = data.ageText;
  if (addressEl) addressEl.textContent = data.addressVal;
  if (maritalEl) maritalEl.textContent = data.maritalVal;
  if (contactAddressEl) contactAddressEl.textContent = data.contactAddressVal;

  // 2. Render Kinh nghiệm làm việc
  const experienceContainer = document.getElementById("experience-list-target");
  const experienceTemplate = document.getElementById("experience-card-template");

  if (experienceContainer && experienceTemplate) {
    experienceContainer.innerHTML = ""; // Xóa dữ liệu cũ
    data.experiences.forEach(exp => {
      const clone = experienceTemplate.content.cloneNode(true);

      clone.querySelector(".timeline-date").textContent = exp.period;
      clone.querySelector(".timeline-location").textContent = exp.location;
      clone.querySelector(".job-title").textContent = exp.role;
      clone.querySelector(".company-name").textContent = exp.companyName;

      const dutiesUl = clone.querySelector(".job-duties");
      exp.duties.forEach(duty => {
        const li = document.createElement("li");
        li.textContent = duty;
        dutiesUl.appendChild(li);
      });

      experienceContainer.appendChild(clone);
    });
  }

  // 3. Render Dự án
  const projectsContainer = document.getElementById("projects-list-target");
  const projectTemplate = document.getElementById("project-card-template");

  if (projectsContainer && projectTemplate) {
    projectsContainer.innerHTML = ""; // Xóa dữ liệu cũ
    data.projects.forEach(project => {
      const clone = projectTemplate.content.cloneNode(true);

      clone.querySelector(".project-duration").textContent = project.duration;
      clone.querySelector(".project-title").textContent = project.title;

      const detailsUl = clone.querySelector(".project-details");
      project.details.forEach(detail => {
        const li = document.createElement("li");
        li.textContent = detail;
        detailsUl.appendChild(li);
      });

      const techBox = clone.querySelector(".project-technologies");
      project.technologies.forEach(tech => {
        const badge = document.createElement("span");
        badge.className = "badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-2 py-1 fs-7";
        badge.textContent = tech;
        techBox.appendChild(badge);
      });

      projectsContainer.appendChild(clone);
    });
  }

  // 4. Render Kỹ năng
  const skillsContainer = document.getElementById("skills-list-target");
  const skillTemplate = document.getElementById("skill-group-template");

  if (skillsContainer && skillTemplate) {
    skillsContainer.innerHTML = ""; // Xóa dữ liệu cũ
    data.skills.forEach(skill => {
      const clone = skillTemplate.content.cloneNode(true);

      clone.querySelector(".skill-name").textContent = skill.groupName;
      clone.querySelector(".skill-description").textContent = skill.description;

      skillsContainer.appendChild(clone);
    });
  }
}

// ==========================================================================
// THAY ĐỔI NGÔN NGỮ TOÀN DIỆN (i18n Handler)
// ==========================================================================
let currentTypingInstance = null;

function changeLanguage(lang) {
  if (!translations[lang]) lang = "vi";

  // 1. Cập nhật các văn bản tĩnh trên trang
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 2. Cập nhật các Placeholder input/textarea
  const placeholders = document.querySelectorAll("[data-placeholder]");
  placeholders.forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // 3. Render các dữ liệu CV động
  renderDynamicContent(lang);

  // 4. Cập nhật trạng thái dropdown ngôn ngữ
  const langTextMap = {
    vi: "Tiếng Việt",
    en: "English",
    ja: "日本語"
  };
  const currentLangText = document.getElementById("current-lang-text");
  if (currentLangText) {
    currentLangText.textContent = langTextMap[lang];
  }

  // Active class in dropdown items
  document.querySelectorAll(".lang-option").forEach(opt => {
    if (opt.getAttribute("data-lang") === lang) {
      opt.classList.add("active");
    } else {
      opt.classList.remove("active");
    }
  });

  // 5. Lưu vào localStorage
  localStorage.setItem("language", lang);

  // 6. Cập nhật hiệu ứng gõ chữ theo ngôn ngữ tương ứng
  updateTypingWords(lang);

  // Kích hoạt lại scroll reveal cho các phần tử mới render
  initScrollRevealObserver();
}

// Khởi tạo trình dịch
function initLanguageSelector() {
  const options = document.querySelectorAll(".lang-option");
  options.forEach(opt => {
    opt.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLang = opt.getAttribute("data-lang");
      changeLanguage(selectedLang);
    });
  });

  // Tải ngôn ngữ mặc định từ local hoặc mặc định Việt
  const savedLang = localStorage.getItem("language") || "vi";
  changeLanguage(savedLang);
}

// ==========================================================================
// HIỆU ỨNG GÕ CHỮ (TYPING EFFECT)
// ==========================================================================
class TypingEffect {
  constructor(element, words, wait = 3000) {
    this.element = element;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.active = true;
    this.type();
  }

  destroy() {
    this.active = false;
  }

  type() {
    if (!this.active) return;

    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.textContent = this.txt;

    let typeSpeed = 80;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

function updateTypingWords(lang) {
  const target = document.getElementById("typed-text-target");
  if (!target) return;

  if (currentTypingInstance) {
    currentTypingInstance.destroy();
  }

  let words = [];
  if (lang === "vi") {
    words = [
      "Quản trị hệ thống IT & MES/ERP",
      "Quản lý dự án & Phát triển đội ngũ",
      "Thiết kế hạ tầng mạng & Bảo mật",
      "Thúc đẩy chuyển đổi số & Ứng dụng AI"
    ];
  } else if (lang === "ja") {
    words = [
      "ITシステム＆MES/ERPの運用管理",
      "プロジェクト＆チームマネジメント",
      "ネットワーク設計＆情報セキュリティ",
      "DX推進＆ローカルAIの導入"
    ];
  } else {
    words = [
      "IT Systems & MES/ERP Operations",
      "Project & Team Management",
      "Network Infrastructure & Security",
      "Digital Transformation & AI Integration"
    ];
  }

  currentTypingInstance = new TypingEffect(target, words, 2000);
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
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ==========================================================================
// XỬ LÝ FORM LIÊN HỆ (CONTACT FORM)
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const alertContainer = document.getElementById("form-alert-container");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      const selectedLang = localStorage.getItem("language") || "vi";
      const submitBtn = document.getElementById("contact-submit-btn");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>${translations[selectedLang]["contact.sending"]}`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        alertContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show border-0 shadow-sm" role="alert">
            <i class="fa-solid fa-circle-check me-2"></i>
            ${translations[selectedLang]["contact.success"]}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;

        form.reset();
        form.classList.remove("was-validated");
      }, 1500);
    });
  }
}

// ==========================================================================
// HÀM KHỞI CHẠY CHÍNH (ON DOM LOAD)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initLanguageSelector(); // Chạy i18n & Render dynamic data
  initScrollEffects();
  initContactForm();
});
