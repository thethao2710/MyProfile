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
    "footer.copyright": "© 2026 Nguyễn Thế Thảo. Bảo lưu mọi quyền."
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
    "hero.description": "With over 8 years of experience in IT, MES/ERP, and network infrastructure management and operations in high-tech manufacturing environments. Oriented towards driving digital transformation, optimizing business processes, and building high-performance IT teams.",
    "hero.btnContact": "Contact now",
    "hero.btnExperience": "View experience",
    "about.title": "ABOUT ME",
    "about.personalInfo": "Personal Information",
    "about.yob": "Year of birth",
    "about.phone": "Phone",
    "about.email": "Email",
    "about.address": "Work location",
    "about.marital": "Marital status",
    "about.objective": "Career Objective",
    "about.obj1": "Desire to develop a career in a professional environment, where I can maximize my system management capabilities, leadership skills, and innovative thinking.",
    "about.obj2": "Committed to contributing my best to system stability, data security, and network infrastructure optimization to increase the production efficiency of the enterprise.",
    "about.stat1": "Years of experience",
    "about.stat2": "System uptime",
    "about.stat3": "Team members",
    "experience.title": "WORK EXPERIENCE",
    "projects.title": "KEY PROJECTS",
    "skills.title": "SKILLS & EDUCATION",
    "skills.workskills": "Professional Skills",
    "skills.education": "Education",
    "skills.degree": "Bachelor's Degree in Electronics and Telecommunications",
    "skills.school": "University of Science, VNU-HCM",
    "skills.languages": "Languages",
    "skills.japanese": "Japanese",
    "skills.japaneseLevel": "JLPT N3 / Business level N2 equivalent",
    "skills.english": "English",
    "skills.englishLevel": "Read and understand technical documents",
    "skills.hobbies": "Personal Hobbies",
    "skills.hobbyRead": "Reading books",
    "skills.hobbyTravel": "Traveling",
    "skills.hobbyMusic": "Listening to music",
    "skills.hobbySocial": "Socializing",
    "contact.title": "CONTACT",
    "contact.qrTitle": "Mobile Connection",
    "contact.qrDesc": "Scan the QR code with your mobile device to quickly access the online version of this portfolio.",
    "contact.infoTitle": "Contact Information",
    "contact.infoDesc": "Feel free to connect with me to explore collaboration opportunities or discuss technological solutions.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Current address",
    "contact.formTitle": "Send a direct message",
    "contact.formName": "Full name",
    "contact.formEmail": "Email address",
    "contact.formSubject": "Subject",
    "contact.formMessage": "Content",
    "contact.placeholderName": "Your full name",
    "contact.placeholderEmail": "name@example.com",
    "contact.placeholderSubject": "Message subject",
    "contact.placeholderMessage": "Enter your message here...",
    "contact.btnSubmit": "Send message",
    "contact.sending": "Sending message...",
    "contact.success": "Thank you! Your message has been sent successfully. I will get back to you as soon as possible.",
    "footer.copyright": "© 2026 Nguyen The Thao. All rights reserved."
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "自己紹介",
    "nav.experience": "職歴",
    "nav.projects": "プロジェクト",
    "nav.skills": "スキル・学歴",
    "nav.contact": "連絡先",
    "hero.badge": "ポートフォリオへようこそ",
    "hero.iam": "私は",
    "hero.expert": "専門家",
    "hero.description": "ハイテク製造環境におけるIT、MES/ERP、およびネットワークインフラの管理と運用で8年以上の経験を持ちます。デジタルトランスフォーメーション（DX）の推進、業務プロセスの最適化、および高パフォーマンスなITチームの構築を目指しています。",
    "hero.btnContact": "今すぐ連絡",
    "hero.btnExperience": "職歴を見る",
    "about.title": "自己紹介",
    "about.personalInfo": "個人情報",
    "about.yob": "生年",
    "about.phone": "電話番号",
    "about.email": "メールアドレス",
    "about.address": "勤務地",
    "about.marital": "配偶者の有無",
    "about.objective": "キャリア目標",
    "about.obj1": "システム管理能力、リーダーシップスキル、および革新的な思考を最大限に発揮できる専門的な環境でキャリアを構築することを希望します。",
    "about.obj2": "システムの安定稼働、情報セキュリティの確保、およびネットワークインフラの最適化に全力を尽くし、企業の生産効率向上に貢献することを約束します。",
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
    "footer.copyright": "© 2026 グエン・テー・タオ. All rights reserved."
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
        title: "Xây dựng, triển khai và nâng cấp hệ thống mạng nhà máy",
        duration: "Đã hoàn thành",
        details: [
          "Khảo sát, thiết kế và xây dựng giải pháp kiến trúc mạng toàn diện cho toàn bộ nhà máy.",
          "Trực tiếp triển khai lắp đặt thiết bị, cấu hình hệ thống mạng dự phòng và bảo mật cao.",
          "Thực hiện nâng cấp, mở rộng hạ tầng mạng đáp ứng dây chuyền mới và định hướng Smart Factory."
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
        technologies: ["MES", "ERP Sharp", "SAP ERP-ECC 6.0", "Oracle"]
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
    maritalVal: "Married",
    contactAddressVal: "Thuận Giao, HCMC (Bình Dương)",
    experiences: [
      {
        companyName: "Sharp Manufacturing Vietnam Co., Ltd.",
        role: "IT Manager (Production Division)",
        period: "04/2021 – Present",
        location: "HCMC (Binh Duong)",
        duties: [
          "Overall management and operation of MES/ERP systems: including network infrastructure, servers, databases, and production control systems, ensuring stable operation with 99.9% uptime to meet continuous 24/7 production requirements.",
          "Leading system improvement and development: analyzing business requirements, drafting specifications (specs), organizing development, testing, and deploying upgrades (servers, applications, control systems).",
          "Designing and standardizing IT & production processes: building, implementing, and optimizing operational processes, ensuring compliance with ISO/IATF standards.",
          "Managing and developing IT infrastructure: deploying, expanding, and optimizing network systems (L2/L3 Switches, Firewalls, Routers, Wi-Fi), ensuring performance and information security.",
          "Building and operating production data management systems: managing databases, system logs, and product image data; designing backup & recovery solutions to ensure data integrity and security.",
          "Developing internal solutions: building supporting applications and tools to optimize operations, improve productivity, and minimize manual tasks.",
          "Driving digital transformation: researching and applying new technologies (AI, Automation, Open-source) to enhance production and management efficiency.",
          "Managing and troubleshooting production system incidents: ensuring rapid response, minimizing downtime, and maintaining continuous operations.",
          "Coordinating and working with international partners (Japan) and vendors in system deployment, operation, and troubleshooting.",
          "Managing the IT team: task allocation, training, developing personnel capabilities, and building a high-performing team of 9 members."
        ]
      },
      {
        companyName: "Viet International Human Resources Joint Stock Company",
        role: "IT Specialist",
        period: "12/2018 – 06/2020",
        location: "HCMC",
        duties: [
          "Developing and maintaining the company website, implementing Internet Marketing solutions to enhance brand awareness.",
          "Managing computer systems, peripheral devices, and internal network infrastructure, ensuring high availability and data security.",
          "Training, providing technical support, and guiding staff on using office software.",
          "Translating technical documents, supporting Japanese partners in technology transfer and system configuration."
        ]
      },
      {
        companyName: "DongA Joint Stock Commercial Bank (DongA Bank)",
        role: "Application System Operations IT Specialist",
        period: "06/2018 – 03/2019",
        location: "HCMC",
        duties: [
          "Monitoring and operating server systems (Core Banking, Card, Internet Banking, etc.), ensuring stable and continuous 24/7 system operation without payment or withdrawal issues.",
          "Implementing system changes and upgrades to meet banking system requirements.",
          "Deploying new projects and systems (SWIFT international payment system).",
          "Researched and implemented new technology solutions to optimize systems."
        ]
      },
      {
        companyName: "Washin Aluminum Co., Ltd.",
        role: "Technician - Automatic Machine Operator",
        period: "03/2015 – 03/2018",
        location: "Osaka, Japan",
        duties: [
          "Worked directly in Japan, responsible for operating automated manufacturing machinery.",
          "Ensured occupational safety and maintained continuous production processes meeting Japanese quality standards."
        ]
      }
    ],
    projects: [
      {
        title: "Large-Scale Image Storage System (NAS)",
        duration: "3 months",
        details: [
          "Designed and deployed a large-scale image storage system using Synology NAS (10PB).",
          "Built high-bandwidth 10Gbps network infrastructure for real-time data transmission.",
          "Optimized real-time processing applications using Golang, enhancing performance and data processing speed."
        ],
        technologies: ["NAS Synology", "Golang", "Network 10Gbps", "Real-time Storage"]
      },
      {
        title: "Production BI Reporting System",
        duration: "4 months",
        details: [
          "Designed and implemented a BI platform using open-source technology (Docker), optimizing investment costs.",
          "Built a centralized Data Warehouse architecture for production data analysis.",
          "Developed visual dashboards to support KPI monitoring and quick decision-making."
        ],
        technologies: ["Docker", "Data Warehouse", "Power BI / Metabase", "SQL Server"]
      },
      {
        title: "Internal AI System Implementation",
        duration: "In progress",
        details: [
          "Built a Local AI model running internally, ensuring corporate information security and data safety.",
          "Applied AI in translation, document analysis, and operational workflow standardization.",
          "Automated business operations and production management by combining AI with n8n.",
          "Developed internal and programming support Chatbots, optimizing system development time."
        ],
        technologies: ["Local AI", "n8n", "Chatbot Development", "Python", "Automation"]
      },
      {
        title: "Factory Network Construction, Deployment, and Upgrade",
        duration: "Completed",
        details: [
          "Surveyed, designed, and constructed comprehensive network architecture solutions for the entire factory.",
          "Directly deployed, installed equipment, and configured high-security redundant network systems.",
          "Upgraded and expanded network infrastructure to support new production lines and smart factory orientation."
        ],
        technologies: ["L2/L3 Switches", "Firewall", "Fiber Networks", "Industrial Wifi"]
      },
      {
        title: "MES/ERP Operations",
        duration: "Continuous",
        details: [
          "Ensured stable MES operations, achieving 99.9% uptime for 24/7 production.",
          "Handled incidents and responded quickly within 8 hours, including holidays and off-hours.",
          "Supported the transition from Sharp ERP to SAP ERP-ECC 6.0 (ongoing)."
        ],
        technologies: ["MES", "ERP Sharp", "SAP ERP-ECC 6.0", "Oracle"]
      },
      {
        title: "Project and Team Management",
        duration: "Continuous",
        details: [
          "Managed the IT department of 9 members, organized into 3 functional groups: Operations, Development, and Improvement.",
          "Assigned tasks, managed performance, and trained and developed successor teams.",
          "Collaborated closely with the Board of Directors, production division, and vendors to deploy projects."
        ],
        technologies: ["Agile/Scrum", "Team Leadership", "KPI Management", "Vendor Coordination"]
      }
    ],
    skills: [
      {
        groupName: "Management & Leadership",
        description: "Capable of leading, inspiring, and building a cohesive, high-performing IT team. Planning and coordinating resources to ensure project timelines and budgets are met. Good communication, confident, and proactive mindset in Vietnamese and Japanese."
      },
      {
        groupName: "MES/ERP Systems & Databases",
        description: "Over 5 years of direct experience in managing and optimizing manufacturing MES/ERP systems. Designing automated data backup and recovery solutions, operating large SQL Server database systems, and performing BI data analysis."
      },
      {
        groupName: "Network Infrastructure & Security",
        description: "Designing and expanding complex industrial network systems (Routing, L2/L3 Switching, Sophos/Fortinet Firewalls, Industrial Wi-Fi). Optimizing high-capacity data transmission bandwidth (10Gbps) and ensuring system information security."
      },
      {
        groupName: "Digital Transformation & Local AI",
        description: "Playing a pioneering role in researching and deploying new technologies, including Local Artificial Intelligence (Local AI), process automation with n8n/Python, and developing factory operation optimization applications using Golang."
      }
    ]
  },
  ja: {
    ageText: "1992年 (34歳)",
    addressVal: "ホーチミン市 ＆ ドンナイ省",
    maritalVal: "既婚",
    contactAddressVal: "ビンズン省 トゥアンザオ (ホーチミン市近郊)",
    experiences: [
      {
        companyName: "シャープ・マニュファクチャリング・ベトナム (Sharp Manufacturing Vietnam Co., Ltd.)",
        role: "ITマネージャー (製造部門)",
        period: "2021年04月 – 現在",
        location: "ホーチミン市 (ビンズン省)",
        duties: [
          "MES/ERPシステムの全体的な管理と運用：ネットワークインフラ、サーバー、データベース、生産制御システムを含め、24時間365日の連続生産要件に対応し、99.9%のアップタイムで安定稼働を実現。",
          "システムの改善と開発の主導：業務要件の分析、仕様書（スペック）の作成、開発・テストの組織化、およびアップグレード（サーバー、アプリケーション、制御システム）の適用。",
          "ITおよび生産プロセスの設計と標準化：運用プロセスの構築、適用、最適化を推進し、ISO/IATF標準への準拠を確保。",
          "ITインフラの管理と構築：ネットワークシステム（L2/L3スイッチ、ファイアウォール、ルーター、Wi-Fi）の導入、拡張、最適化を行い、パフォーマンスと情報セキュリティを確保。",
          "生産データ管理システムの構築と運用：データベース、システムログ、製品画像データの管理、およびデータ安全性を確保するためのバックアップ・復元ソリューションの設計。",
          "社内ソリューションの開発：運用効率の向上、生産性の改善、および手作業の削減をサポートするアプリケーションやツールの開発。",
          "デジタルトランスフォーメーション（DX）の推進：生産および管理効率向上のため、最先端技術（AI、自動化、オープンソース）の調査と導入。",
          "生産システム障害の管理とトラブルシューティング：迅速な対応を確保し、ダウンタイムを最小限に抑え、連続操業を維持。",
          "システム導入、運用、およびトラブルシューティングにおけるグローバルパートナー（日本）や外部ベンダーとの調整・協業。",
          "ITチームのマネジメント：業務割り当て、トレーニング、人材育成、および9名の高パフォーマンスなチームの構築。"
        ]
      },
      {
        companyName: "ベトナム国際人材株式会社 (Viet International Human Resources Joint Stock Company)",
        role: "ITスペシャリスト",
        period: "2018年12月 – 2020年06月",
        location: "ホーチミン市",
        duties: [
          "社内Webサイトの構築・保守運用、およびブランド認知度向上のためのインターネットマーケティングの実施。",
          "コンピューターシステム、周辺機器、および社内ネットワークインフラ의 管理を行い、高可用性とデータの安全性を確保。",
          "社員向けITサポート、トラブルシューティング、およびオフィスソフトウェア操作のトレーニングの実施。",
          "技術仕様書の翻訳、および日本側パートナーとの技術移転・システム構成におけるサポート。"
        ]
      },
      {
        companyName: "東亜共同体商業株式銀行 (DongA Bank)",
        role: "アプリケーションシステム運用ITスペシャリスト",
        period: "2018年06月 – 2019年03月",
        location: "ホーチミン市",
        duties: [
          "勘定系システム（Core Banking）、決済カード、インターネットバンキングなどのサーバー監視・運用を行い、決済や出金障害のない24時間365日の安定稼働を維持。",
          "銀行システムの要求に合わせたシステム構成変更やアップグレードの適用。",
          "新規プロジェクトや新システム（国際決済ネットワークSWIFTシステム）の導入支援。",
          "システム最適化を目指した新しい技術ソリューションの調査と導入。"
        ]
      },
      {
        companyName: "和信アルミ株式会社 (Washin Aluminum Co., Ltd.)",
        role: "技術員 - 自動化機械オペレーター",
        period: "2015年03月 – 2018年03月",
        location: "日本国 大阪府",
        duties: [
          "日本での現地実習にて、生産自動化設備の操作および稼働監視を担当。",
          "労働安全を確保し、日本の品質基準に適合した連続生産プロセスを維持。"
        ]
      }
    ],
    projects: [
      {
        title: "大容量画像ストレージシステム (NAS)",
        duration: "3ヶ月",
        details: [
          "Synology NAS（10PB）を使用した大規模な画像ストレージシステムの設計および導入。",
          "リアルタイムのデータ伝送をサポートする10Gbps高速ネットワークインフラの構築。",
          "Golangを用いてリアルタイム処理アプリケーションを最適化し、データ処理速度を向上。"
        ],
        technologies: ["NAS Synology", "Golang", "Network 10Gbps", "Real-time Storage"]
      },
      {
        title: "生産BIレポートシステム",
        duration: "4ヶ月",
        details: [
          "オープンソース技術（Docker）を使用したBIプラットフォームの設計および導入により、投資コストを最適化。",
          "生産データ analysis をサポートする中央集計型データウェアハウスアーキテクチャの構築。",
          "KPIの追跡と迅速な意思決定を支援する直感的なダッシュボードの開発。"
        ],
        technologies: ["Docker", "Data Warehouse", "Power BI / Metabase", "SQL Server"]
      },
      {
        title: "社内AIシステムの導入",
        duration: "進行中",
        details: [
          "企業の秘匿情報とデータセキュリティを保護するため、オンプレミス環境で動作するローカルAIモデルを構築。",
          "翻訳、文書分析、および業務標準化プロセスへのAIの適用。",
          "AIとn8nの連携による業務自動化および生産管理プロセスの最適化。",
          "社内サポートおよびプログラミング支援チャットボットの開発による、システム開発期間の短縮。"
        ],
        technologies: ["Local AI", "n8n", "Chatbot Development", "Python", "Automation"]
      },
      {
        title: "工場ネットワークの構築、導入、およびアップグレード",
        duration: "完了",
        details: [
          "工場全体の包括的なネットワークアーキテクチャソリューションの設計および構築。",
          "高セキュリティな冗長ネットワークシステムの導入、機器設置、および構成の直接実行。",
          "新しい生産ラインおよびスマートファクトリー化に対応するためのインフラのアップグレードと拡張。"
        ],
        technologies: ["L2/L3 Switches", "Firewall", "Fiber Networks", "Industrial Wifi"]
      },
      {
        title: "MES/ERPシステムの運用管理",
        duration: "継続中",
        details: [
          "24時間体制の製造現場を支えるため、MESシステムの稼働率99.9%以上を維持管理。",
          "夜間・休日等の緊急障害発生時に、8時間以内に障害復旧を行う迅速な対応体制の運用。",
          "シャープ独自のERPシステムからSAP ERP-ECC 6.0へのシステム移行サポート（現在進行中）。"
        ],
        technologies: ["MES", "ERP Sharp", "SAP ERP-ECC 6.0", "Oracle"]
      },
      {
        title: "プロジェクトと組織のマネジメント",
        duration: "継続中",
        details: [
          "運用・開発・改善の3つのチームからなる計9名のITエンジニア組織のマネジメント。",
          "各チームへのタスク割り当て、パフォーマンス評価、および技術教育を通じた後継者の育成。",
          "経営層、製造現場、および国内外の外部ベンダーとの確実な意思疎通による円滑なプロジェクト遂行。"
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
  const dropdownItems = document.querySelectorAll(".lang-option");
  dropdownItems.forEach(item => {
    if (item.getAttribute("data-lang") === lang) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 5. Cập nhật từ khóa hiệu ứng gõ chữ
  updateTypingWords(lang);

  // Lưu lựa chọn ngôn ngữ vào localStorage
  localStorage.setItem("language", lang);

  // Re-observe scroll reveal elements since content was dynamic re-rendered
  setTimeout(() => {
    initScrollRevealObserver();
  }, 100);
}

function initLanguageSelector() {
  const dropdownItems = document.querySelectorAll(".lang-option");
  dropdownItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const selectedLang = e.target.getAttribute("data-lang");
      changeLanguage(selectedLang);
    });
  });

  // Đọc ngôn ngữ đã lưu hoặc tự động phát hiện
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
