(() => {
  const supportedLanguages = ["en", "vi", "ja"];
  const languageLabels = {
    en: "English",
    vi: "Tiếng Việt",
    ja: "日本語"
  };
  const translations = {
    vi: {
      "nav.home": "Trang chủ",
      "nav.services": "Dịch vụ",
      "nav.capabilities": "Năng lực tư vấn",
      "nav.about": "Giới thiệu",
      "nav.contact": "Liên hệ",
      "controls.openNavigation": "Mở menu điều hướng",
      "controls.chooseLanguage": "Chọn ngôn ngữ",
      "hero.badge": "Chuyên gia tư vấn hạ tầng và bảo mật CNTT",
      "hero.titleStart": "Hạ tầng CNTT",
      "hero.titleHighlight": "ổn định, bảo mật và dễ quản lý",
      "hero.description": "Đồng hành cùng doanh nghiệp sản xuất và SME trong thiết kế, bảo mật và tối ưu vận hành hạ tầng CNTT — từ network, firewall, Microsoft 365 và Wi-Fi đến backup, quản trị hệ thống.",
      "hero.tagNetwork": "Mạng và VLAN",
      "hero.tagFirewall": "Firewall và VPN",
      "hero.bookConsultation": "Liên hệ ngay",
      "hero.chatZalo": "Chat qua Zalo",
      "services.kicker": "Dịch vụ",
      "services.title": "Giải pháp theo vấn đề doanh nghiệp",
      "services.description": "Phạm vi rõ ràng, tập trung vào kết quả có thể sử dụng để ra quyết định và triển khai.",
      "services.viewDetails": "Xem chi tiết dịch vụ",
      "services.receive": "Khách hàng nhận được",
      "cases.kicker": "Năng lực tư vấn",
      "cases.title": "Giải quyết bài toán CNTT ở quy mô doanh nghiệp",
      "cases.description": "Từ đánh giá hiện trạng đến phương án triển khai, kiểm soát rủi ro và tối ưu chi phí vận hành.",
      "about.kicker": "Giới thiệu",
      "about.role": "Chuyên gia tư vấn hạ tầng và bảo mật CNTT",
      "about.descriptionOne": "Với hơn 8 năm trực tiếp quản lý, vận hành và cải tiến hạ tầng CNTT cho doanh nghiệp sản xuất, Nguyễn Thế Thảo giúp chuyển những vấn đề kỹ thuật phức tạp thành lộ trình ưu tiên rõ ràng, phù hợp với ngân sách và mục tiêu vận hành.",
      "about.descriptionTwo": "Mỗi phương án được cân nhắc đồng thời trên sự ổn định hệ thống, an toàn dữ liệu, chi phí sở hữu và khả năng mở rộng. Mục tiêu là để doanh nghiệp đầu tư có cơ sở, vận hành chủ động và giảm thiểu rủi ro gián đoạn.",
      "about.highlightOneTitle": "Thấu hiểu môi trường sản xuất",
      "about.highlightOneText": "Kết nối yêu cầu của văn phòng, nhà xưởng và hệ thống ứng dụng quan trọng.",
      "about.highlightTwoTitle": "Tư vấn dựa trên hiện trạng",
      "about.highlightTwoText": "Ưu tiên xử lý theo mức độ ảnh hưởng, rủi ro và nguồn lực sẵn có.",
      "about.highlightThreeTitle": "Phối hợp đến khi triển khai",
      "about.highlightThreeText": "Làm việc cùng đội CNTT và nhà cung cấp để đưa phương án vào thực tế.",
      "about.capabilitiesKicker": "Năng lực chuyên môn",
      "about.capabilitiesTitle": "Giải quyết hạ tầng CNTT bằng góc nhìn vận hành và đầu tư",
      "about.capabilitiesDescription": "Từ khảo sát hiện trạng đến tổ chức triển khai, trọng tâm luôn là giải pháp phù hợp, có thể vận hành lâu dài và tạo giá trị rõ ràng cho doanh nghiệp.",
      "about.capabilityOneTitle": "Kiến trúc hạ tầng phù hợp",
      "about.capabilityOneText": "Thiết kế network, Wi-Fi, firewall, server và phương án dự phòng bám sát quy mô người dùng, nhà xưởng và các hệ thống trọng yếu.",
      "about.capabilityTwoTitle": "Bảo mật chủ động, phục hồi sẵn sàng",
      "about.capabilityTwoText": "Rà soát quyền truy cập, VPN, firewall, Microsoft 365, thiết bị đầu cuối và backup để giảm rủi ro và bảo vệ hoạt động liên tục.",
      "about.capabilityThreeTitle": "Đầu tư đúng nhu cầu, tối ưu chi phí",
      "about.capabilityThreeText": "Tư vấn thiết bị, server hoặc đám mây, phiên bản ứng dụng và số lượng license phù hợp để kiểm soát chi phí mà vẫn sẵn sàng mở rộng.",
      "contact.kicker": "Liên hệ",
      "contact.title": "Kết nối để trao đổi giải pháp phù hợp",
      "contact.description": "Thông tin liên hệ trực tiếp để trao đổi về nhu cầu hạ tầng, bảo mật và vận hành CNTT của doanh nghiệp.",
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
      "footer.role": "Chuyên gia tư vấn hạ tầng và bảo mật CNTT",
      "backToTop": "Lên đầu trang",
      "image.infrastructureAlt": "Minh họa hệ thống máy chủ, mạng và bảo mật CNTT",
      "servicesPage.home": "Trang chủ",
      "servicesPage.kicker": "Dịch vụ tư vấn",
      "servicesPage.title": "Từ vấn đề kỹ thuật đến kế hoạch hành động rõ ràng",
      "servicesPage.description": "Mỗi dịch vụ được xác định theo phạm vi, sản phẩm bàn giao và mục tiêu vận hành. Thông tin chi tiết sẽ được chốt sau buổi trao đổi ban đầu.",
      "servicesPage.assessmentTitle": "Đánh giá hạ tầng và bảo mật CNTT",
      "servicesPage.assessmentDescription": "Phù hợp khi doanh nghiệp cần hiểu rõ hiện trạng, rủi ro và thứ tự ưu tiên trước khi đầu tư hoặc thay đổi hệ thống.",
      "servicesPage.assessmentScope": "Phạm vi đánh giá",
      "servicesPage.assessmentScopeOne": "Internet, firewall, network topology, VLAN và Wi-Fi",
      "servicesPage.assessmentScopeTwo": "Server, NAS, backup, Microsoft 365 và tài khoản",
      "servicesPage.assessmentScopeThree": "Endpoint, quyền truy cập và chính sách bảo mật cơ bản",
      "servicesPage.assessmentDeliverables": "Sản phẩm bàn giao",
      "servicesPage.assessmentDeliverableOne": "Hiện trạng và danh sách rủi ro",
      "servicesPage.assessmentDeliverableTwo": "Sơ đồ hạ tầng ở mức phù hợp",
      "servicesPage.assessmentDeliverableThree": "Khuyến nghị theo mức độ ưu tiên",
      "servicesPage.assessmentDeliverableFour": "Buổi rà soát kết quả và kế hoạch hành động",
      "servicesPage.networkTitle": "Tư vấn mạng và bảo mật",
      "servicesPage.networkDescription": "Phù hợp khi cần thiết kế mới, rà soát kiến trúc hoặc chuẩn bị triển khai với đội CNTT và nhà cung cấp.",
      "servicesPage.networkScope": "Nội dung tư vấn",
      "servicesPage.networkScopeOne": "Chính sách firewall, FortiGate, VPN và truy cập từ xa",
      "servicesPage.networkScopeTwo": "VLAN, phân tách mạng và Wi-Fi doanh nghiệp",
      "servicesPage.networkScopeThree": "Dự phòng Internet, backup và tính liên tục vận hành",
      "servicesPage.networkDeliverables": "Kết quả mong đợi",
      "servicesPage.networkDeliverableOne": "Phương án kỹ thuật có thể triển khai",
      "servicesPage.networkDeliverableTwo": "Nguyên tắc kiểm soát truy cập và bảo mật",
      "servicesPage.networkDeliverableThree": "Điểm cần làm rõ với nhà cung cấp trước khi thực hiện",
      "servicesPage.managerTitle": "Quản lý CNTT đồng hành",
      "servicesPage.managerDescription": "Dành cho doanh nghiệp đã có nhân sự CNTT nhưng cần hỗ trợ về định hướng, đánh giá và các quyết định quan trọng định kỳ.",
      "servicesPage.managerScope": "Hỗ trợ định kỳ",
      "servicesPage.managerScopeOne": "Rà soát hệ thống, backup và các rủi ro ưu tiên",
      "servicesPage.managerScopeTwo": "Đánh giá đề xuất nhà cung cấp, kế hoạch và ngân sách CNTT",
      "servicesPage.managerScopeThree": "Tư vấn chính sách và lộ trình nâng cấp phù hợp",
      "servicesPage.managerDeliverables": "Cách làm việc",
      "servicesPage.managerDeliverableOne": "Thống nhất phạm vi và đầu mối làm việc",
      "servicesPage.managerDeliverableTwo": "Trao đổi định kỳ theo lịch phù hợp",
      "servicesPage.managerDeliverableThree": "Ghi nhận các quyết định và việc cần thực hiện tiếp theo",
    },
    ja: {
      "nav.home": "ホーム",
      "nav.services": "サービス",
      "nav.capabilities": "専門性",
      "nav.about": "紹介",
      "nav.contact": "お問い合わせ",
      "controls.openNavigation": "ナビゲーションを開く",
      "controls.chooseLanguage": "言語を選択",
      "hero.badge": "IT インフラ・セキュリティ コンサルタント",
      "hero.titleStart": "安定し、安全で、管理しやすい",
      "hero.titleHighlight": "IT インフラ",
      "hero.description": "製造業と中小企業に寄り添い、ネットワーク、ファイアウォール、Microsoft 365、Wi-Fi、バックアップ、システム運用まで、IT インフラの設計・セキュリティ・最適化を支援します。",
      "hero.tagNetwork": "ネットワークと VLAN",
      "hero.tagFirewall": "ファイアウォールと VPN",
      "hero.bookConsultation": "今すぐ連絡する",
      "hero.chatZalo": "Zalo で相談する",
      "services.kicker": "サービス",
      "services.title": "企業課題に合わせたソリューション",
      "services.description": "判断と導入に活用できる、明確な範囲と成果に焦点を当てます。",
      "services.viewDetails": "サービスの詳細を見る",
      "services.receive": "提供内容",
      "cases.kicker": "専門性",
      "cases.title": "企業規模の IT 課題を解決する",
      "cases.description": "現状評価から導入計画、リスク管理、運用コストの最適化まで支援します。",
      "about.kicker": "紹介",
      "about.role": "IT インフラ・セキュリティ コンサルタント",
      "about.descriptionOne": "製造業での IT インフラ管理、運用、改善に 8 年以上携わってきた経験を基に、複雑な技術課題を予算と運用目標に沿った明確な優先計画へと整理します。",
      "about.descriptionTwo": "システムの安定性、データ保護、総保有コスト、将来の拡張性を総合的に検討します。根拠ある投資と主体的な運用、業務中断リスクの低減が目標です。",
      "about.highlightOneTitle": "製造現場への理解",
      "about.highlightOneText": "オフィス、工場、重要業務システムの要件をつなぎます。",
      "about.highlightTwoTitle": "現状に基づく提案",
      "about.highlightTwoText": "影響度、リスク、利用可能なリソースに応じて優先順位を定めます。",
      "about.highlightThreeTitle": "導入まで伴走",
      "about.highlightThreeText": "社内 IT チームとベンダーと連携し、提案を実行に移します。",
      "about.capabilitiesKicker": "専門領域",
      "about.capabilitiesTitle": "運用と投資の視点で IT インフラを解決する",
      "about.capabilitiesDescription": "現状調査から導入の推進まで、長期に運用でき、企業価値につながる適切なソリューションを重視します。",
      "about.capabilityOneTitle": "事業に適したインフラ設計",
      "about.capabilityOneText": "利用者数、工場、重要システムに合わせて、ネットワーク、Wi-Fi、ファイアウォール、サーバー、冗長化を設計します。",
      "about.capabilityTwoTitle": "予防的なセキュリティと復旧力",
      "about.capabilityTwoText": "アクセス権、VPN、ファイアウォール、Microsoft 365、端末、バックアップを点検し、リスク低減と事業継続を支えます。",
      "about.capabilityThreeTitle": "適切な投資とコスト最適化",
      "about.capabilityThreeText": "機器、サーバーまたはクラウド、アプリケーションの版、ライセンス数を最適化し、拡張性を保ちながらコストを管理します。",
      "contact.kicker": "お問い合わせ",
      "contact.title": "最適なソリューションについてご相談ください",
      "contact.description": "企業の IT インフラ、セキュリティ、運用に関するご相談は、以下の連絡先をご利用ください。",
      "contact.infoTitle": "連絡先",
      "contact.infoDescription": "Zalo、電話、メールでご要望をお聞きし、都合のよい時間を調整します。",
      "contact.phone": "電話・Zalo",
      "contact.email": "メール",
      "contact.region": "対応エリア",
      "contact.regionValue": "ホーチミン市・ビンズオン省・ドンナイ省",
      "contact.zalo": "Zalo で相談する",
      "contact.quickTitle": "すぐにアクセス",
      "contact.quickDescription": "モバイル端末で QR コードを読み取り、ウェブサイトと連絡先情報にすぐアクセスできます。",
      "contact.qrAlt": "thaoit.id.vn への QR コード",
      "footer.role": "IT インフラ・セキュリティ コンサルタント",
      "backToTop": "ページ上部へ戻る",
      "image.infrastructureAlt": "サーバー、ネットワーク、IT セキュリティのイメージ",
      "servicesPage.home": "ホーム",
      "servicesPage.kicker": "コンサルティングサービス",
      "servicesPage.title": "技術課題を明確な行動計画へ",
      "servicesPage.description": "各サービスは、範囲、成果物、運用目標を明確にして設計します。詳細は初回の打ち合わせ後に確定します。",
      "servicesPage.assessmentTitle": "IT インフラ・セキュリティ評価",
      "servicesPage.assessmentDescription": "投資やシステム変更の前に、現状、リスク、優先順位を明確にしたい企業に適しています。",
      "servicesPage.assessmentScope": "評価範囲",
      "servicesPage.assessmentScopeOne": "インターネット、ファイアウォール、ネットワーク構成、VLAN、Wi-Fi",
      "servicesPage.assessmentScopeTwo": "サーバー、NAS、バックアップ、Microsoft 365、アカウント",
      "servicesPage.assessmentScopeThree": "端末、アクセス権、基本的なセキュリティポリシー",
      "servicesPage.assessmentDeliverables": "成果物",
      "servicesPage.assessmentDeliverableOne": "現状とリスク一覧",
      "servicesPage.assessmentDeliverableTwo": "適切な粒度のインフラ構成図",
      "servicesPage.assessmentDeliverableThree": "優先度に応じた提案",
      "servicesPage.assessmentDeliverableFour": "結果レビューと行動計画の打ち合わせ",
      "servicesPage.networkTitle": "ネットワーク・セキュリティ コンサルティング",
      "servicesPage.networkDescription": "新規設計、アーキテクチャレビュー、または社内 IT チームとベンダーによる導入準備に適しています。",
      "servicesPage.networkScope": "支援内容",
      "servicesPage.networkScopeOne": "ファイアウォールポリシー、FortiGate、VPN、リモートアクセス",
      "servicesPage.networkScopeTwo": "VLAN、ネットワーク分離、企業向け Wi-Fi",
      "servicesPage.networkScopeThree": "インターネット冗長化、バックアップ、事業継続性",
      "servicesPage.networkDeliverables": "期待される成果",
      "servicesPage.networkDeliverableOne": "導入可能な技術方針",
      "servicesPage.networkDeliverableTwo": "アクセス制御とセキュリティの原則",
      "servicesPage.networkDeliverableThree": "導入前にベンダーと確認すべき事項",
      "servicesPage.managerTitle": "バーチャル IT マネージャー",
      "servicesPage.managerDescription": "社内 IT 担当者がいても、定期的な方針、評価、重要な判断の支援が必要な企業向けです。",
      "servicesPage.managerScope": "定期支援",
      "servicesPage.managerScopeOne": "システム、バックアップ、優先リスクのレビュー",
      "servicesPage.managerScopeTwo": "ベンダー提案、IT 計画、予算のレビュー",
      "servicesPage.managerScopeThree": "ポリシーと適切なアップグレード計画の助言",
      "servicesPage.managerDeliverables": "進め方",
      "servicesPage.managerDeliverableOne": "範囲と窓口の合意",
      "servicesPage.managerDeliverableTwo": "適切な頻度での定期ミーティング",
      "servicesPage.managerDeliverableThree": "決定事項と次のアクションの記録",
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
    return language === "en" ? fallback : translations[language]?.[key] || fallback;
  }

  function updateMetadata(language, metadata, defaults) {
    const localized = language === "en" ? defaults : metadata?.[language] || defaults;

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
