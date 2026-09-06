const localizedContent = {
  en: {
    services: [
      {
        icon: "fa-solid fa-clipboard-check",
        title: "IT Health Check for businesses",
        description: "Assess the current infrastructure of businesses with 20–200 staff before planning upgrades or major technology investments.",
        deliverables: [
          "Current-state assessment and prioritized risk register",
          "Network diagram and list of operational bottlenecks",
          "30 / 90 / 180-day improvement roadmap"
        ]
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Business network and information security",
        description: "Design and improve network, Wi-Fi, firewall, access control, and backup architecture for offices and manufacturing environments.",
        deliverables: [
          "Logical and physical network architecture",
          "Network segmentation, firewall, and remote access policies",
          "Centralized storage and 3-2-1 backup plan"
        ]
      },
      {
        icon: "fa-solid fa-cloud-arrow-up",
        title: "Microsoft 365 and data governance",
        description: "Structure SharePoint, OneDrive, access permissions, multi-factor authentication, and account lifecycle processes to reduce data exposure.",
        deliverables: [
          "Shared data structure and access permission matrix",
          "Multi-factor authentication and secure remote access plan",
          "User onboarding and offboarding procedure"
        ]
      },
      {
        icon: "fa-solid fa-user-tie",
        title: "Fractional IT management and cost optimization",
        description: "Support management teams with vendor reviews, technology planning, security oversight, and IT budget decisions without requiring a full-time IT Manager.",
        deliverables: [
          "Independent vendor quote and total cost review",
          "Annual budget, asset, license, and risk tracking",
          "Periodic management review and technology roadmap"
        ]
      }
    ],
    caseStudies: [
      {
        label: "Situation 01",
        title: "Factory network segmentation and traffic control",
        sections: [
          ["Context", "Office computers, servers, cameras, production equipment, and guest Wi-Fi share the same internal network."],
          ["Objective", "Limit unnecessary connections between operational areas and improve visibility of network traffic."],
          ["Approach", "Separate office, server, guest, camera, and production zones using VLANs, then allow only required traffic through firewall policies."],
          ["Expected value", "Reduce the scope of incidents, simplify troubleshooting, and make access rules easier to manage."]
        ]
      },
      {
        label: "Situation 02",
        title: "Multi-layer backup for business data",
        sections: [
          ["Context", "Accounting and operational data is stored on a local NAS with no independent recovery copy."],
          ["Objective", "Reduce dependence on a single storage device and improve recovery readiness after an incident."],
          ["Approach", "Apply the 3-2-1 principle with primary storage, an isolated local backup, an encrypted offsite copy, and scheduled restore testing."],
          ["Expected value", "Reduce single points of failure and provide a clearer, testable recovery process."]
        ]
      },
      {
        label: "Situation 03",
        title: "Security license and recurring cost review",
        sections: [
          ["Context", "The business maintains separate firewall, endpoint, web filtering, and remote access subscriptions from multiple vendors."],
          ["Objective", "Preserve required security controls while removing overlapping features and licenses."],
          ["Approach", "Map business requirements against current features, compare renewal options, and recommend a right-sized licensing structure."],
          ["Expected value", "Improve budget transparency and reduce recurring costs caused by duplicate subscriptions."]
        ]
      }
    ]
  },
  vi: {
    services: [
      {
        icon: "fa-solid fa-clipboard-check",
        title: "Đánh giá tổng thể hệ thống CNTT",
        description: "Khảo sát hiện trạng hạ tầng cho doanh nghiệp từ 20–200 nhân sự trước khi lập kế hoạch nâng cấp hoặc đầu tư công nghệ.",
        deliverables: [
          "Báo cáo hiện trạng và danh sách rủi ro theo mức độ ưu tiên",
          "Sơ đồ mạng và danh sách điểm nghẽn vận hành",
          "Lộ trình cải tiến theo các mốc 30, 90 và 180 ngày"
        ]
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Mạng doanh nghiệp và an toàn thông tin",
        description: "Thiết kế và cải thiện mạng, Wi-Fi, tường lửa, kiểm soát truy cập và kiến trúc sao lưu cho văn phòng và môi trường sản xuất.",
        deliverables: [
          "Sơ đồ kiến trúc mạng logic và vật lý",
          "Chính sách phân tách mạng, tường lửa và truy cập từ xa",
          "Phương án lưu trữ tập trung và sao lưu dữ liệu 3-2-1"
        ]
      },
      {
        icon: "fa-solid fa-cloud-arrow-up",
        title: "Microsoft 365 và quản trị dữ liệu",
        description: "Quy hoạch SharePoint, OneDrive, quyền truy cập, xác thực đa yếu tố và vòng đời tài khoản để giảm nguy cơ lộ lọt dữ liệu.",
        deliverables: [
          "Cấu trúc dữ liệu dùng chung và ma trận phân quyền",
          "Kế hoạch xác thực đa yếu tố và truy cập từ xa",
          "Quy trình cấp phát và thu hồi tài khoản người dùng"
        ]
      },
      {
        icon: "fa-solid fa-user-tie",
        title: "Quản lý CNTT đồng hành và tối ưu chi phí",
        description: "Hỗ trợ ban lãnh đạo đánh giá nhà cung cấp, hoạch định công nghệ, kiểm soát rủi ro và ra quyết định ngân sách khi chưa cần IT Manager toàn thời gian.",
        deliverables: [
          "Đánh giá độc lập báo giá và tổng chi phí sở hữu",
          "Theo dõi ngân sách, tài sản, giấy phép và rủi ro",
          "Rà soát định kỳ và xây dựng lộ trình công nghệ"
        ]
      }
    ],
    caseStudies: [
      {
        label: "Tình huống 01",
        title: "Phân tách mạng nhà máy và kiểm soát lưu lượng",
        sections: [
          ["Bối cảnh", "Máy tính văn phòng, máy chủ, camera, thiết bị sản xuất và Wi-Fi khách dùng chung một mạng nội bộ."],
          ["Mục tiêu", "Giới hạn các kết nối không cần thiết giữa từng khu vực và tăng khả năng quan sát lưu lượng."],
          ["Phương án", "Phân tách mạng văn phòng, máy chủ, khách, camera và sản xuất bằng VLAN; chỉ cho phép các luồng cần thiết qua chính sách tường lửa."],
          ["Giá trị kỳ vọng", "Thu hẹp phạm vi ảnh hưởng khi có sự cố, dễ khoanh vùng lỗi và quản lý quyền truy cập rõ ràng hơn."]
        ]
      },
      {
        label: "Tình huống 02",
        title: "Thiết kế phương án sao lưu dữ liệu nhiều lớp",
        sections: [
          ["Bối cảnh", "Dữ liệu kế toán và vận hành được lưu trên NAS nội bộ nhưng chưa có bản sao phục hồi độc lập."],
          ["Mục tiêu", "Giảm phụ thuộc vào một thiết bị lưu trữ và nâng cao khả năng phục hồi sau sự cố."],
          ["Phương án", "Áp dụng nguyên tắc 3-2-1 gồm dữ liệu chính, bản sao nội bộ cách ly, bản sao ngoài địa điểm được mã hóa và lịch kiểm tra khôi phục."],
          ["Giá trị kỳ vọng", "Giảm điểm lỗi đơn và hình thành quy trình phục hồi rõ ràng, có thể kiểm tra định kỳ."]
        ]
      },
      {
        label: "Tình huống 03",
        title: "Rà soát giấy phép bảo mật và chi phí định kỳ",
        sections: [
          ["Bối cảnh", "Doanh nghiệp duy trì riêng các gói tường lửa, bảo vệ thiết bị đầu cuối, lọc web và truy cập từ xa từ nhiều nhà cung cấp."],
          ["Mục tiêu", "Duy trì các lớp kiểm soát cần thiết nhưng loại bỏ tính năng và giấy phép bị trùng lặp."],
          ["Phương án", "Đối chiếu yêu cầu vận hành với tính năng đang sử dụng, so sánh phương án gia hạn và đề xuất cơ cấu giấy phép phù hợp."],
          ["Giá trị kỳ vọng", "Minh bạch ngân sách và giảm chi phí định kỳ phát sinh từ các gói dịch vụ chồng chéo."]
        ]
      }
    ]
  },
  ja: {
    services: [
      {
        icon: "fa-solid fa-clipboard-check",
        title: "企業向け IT ヘルスチェック",
        description: "20〜200 名規模の企業を対象に、更新投資や大規模な技術導入を計画する前に IT 基盤の現状を評価します。",
        deliverables: [
          "現状評価レポートと優先度別リスク一覧",
          "ネットワーク構成図と運用上のボトルネック一覧",
          "30 / 90 / 180 日の改善ロードマップ"
        ]
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "企業ネットワークと情報セキュリティ",
        description: "オフィスや製造環境向けに、ネットワーク、Wi-Fi、ファイアウォール、アクセス制御、バックアップ構成を設計・改善します。",
        deliverables: [
          "論理・物理ネットワーク構成図",
          "ネットワーク分離、ファイアウォール、リモートアクセス方針",
          "集中ストレージと 3-2-1 バックアップ計画"
        ]
      },
      {
        icon: "fa-solid fa-cloud-arrow-up",
        title: "Microsoft 365 とデータガバナンス",
        description: "SharePoint、OneDrive、アクセス権限、多要素認証、アカウント管理を整備し、情報漏洩リスクを低減します。",
        deliverables: [
          "共有データ構成とアクセス権限マトリクス",
          "多要素認証とリモートアクセス計画",
          "ユーザーアカウントの発行・回収手順"
        ]
      },
      {
        icon: "fa-solid fa-user-tie",
        title: "伴走型 IT 管理とコスト最適化",
        description: "専任 IT マネージャーを置かない企業向けに、ベンダー評価、技術計画、リスク管理、予算判断を支援します。",
        deliverables: [
          "ベンダー見積書と総保有コストの第三者評価",
          "予算、資産、ライセンス、リスクの管理",
          "定期レビューと技術ロードマップ"
        ]
      }
    ],
    caseStudies: [
      {
        label: "事例 01",
        title: "工場ネットワークの分離と通信制御",
        sections: [
          ["背景", "オフィス PC、サーバー、カメラ、製造設備、ゲスト Wi-Fi が同一ネットワークを共有している。"],
          ["目的", "各業務領域間の不要な通信を制限し、ネットワーク通信の可視性を高める。"],
          ["対応方針", "オフィス、サーバー、ゲスト、カメラ、製造領域を VLAN で分離し、必要な通信のみをファイアウォールで許可する。"],
          ["期待効果", "障害やインシデントの影響範囲を抑え、原因調査とアクセス管理を容易にする。"]
        ]
      },
      {
        label: "事例 02",
        title: "業務データの多層バックアップ設計",
        sections: [
          ["背景", "会計・業務データを社内 NAS に保管しているが、独立した復旧用コピーがない。"],
          ["目的", "単一ストレージへの依存を減らし、障害発生後の復旧準備を改善する。"],
          ["対応方針", "本番データ、隔離したローカルバックアップ、暗号化した遠隔地コピー、定期復元テストによる 3-2-1 方針を適用する。"],
          ["期待効果", "単一障害点を減らし、定期的に確認できる明確な復旧プロセスを整備する。"]
        ]
      },
      {
        label: "事例 03",
        title: "セキュリティライセンスと継続費用の見直し",
        sections: [
          ["背景", "複数ベンダーからファイアウォール、端末保護、Web フィルタリング、リモートアクセスを個別契約している。"],
          ["目的", "必要なセキュリティ対策を維持しながら、重複する機能とライセンスを整理する。"],
          ["対応方針", "業務要件と既存機能を照合し、更新案を比較したうえで適切なライセンス構成を提案する。"],
          ["期待効果", "予算の透明性を高め、重複契約による継続費用を抑える。"]
        ]
      }
    ]
  }
};

const deliverablesHeadings = {
  en: "What you receive",
  vi: "Khách hàng nhận được",
  ja: "提供内容"
};

function getContent(language) {
  return localizedContent[language] || localizedContent.en;
}

function renderServices(language) {
  const target = document.getElementById("services-list-target");
  const template = document.getElementById("service-card-template");

  if (!target || !template) {
    return;
  }

  target.replaceChildren();
  getContent(language).services.forEach((service) => {
    const fragment = template.content.cloneNode(true);
    const deliverables = fragment.querySelector(".service-deliverables");

    fragment.querySelector(".service-icon").className = service.icon;
    fragment.querySelector(".service-title").textContent = service.title;
    fragment.querySelector(".service-description").textContent = service.description;
    fragment.querySelector(".service-deliverables-heading").textContent = deliverablesHeadings[language] || deliverablesHeadings.en;

    service.deliverables.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      deliverables.appendChild(listItem);
    });

    target.appendChild(fragment);
  });
}

function renderCaseStudies(language) {
  const target = document.getElementById("case-studies-target");
  const template = document.getElementById("case-study-template");

  if (!target || !template) {
    return;
  }

  target.replaceChildren();
  getContent(language).caseStudies.forEach((study) => {
    const fragment = template.content.cloneNode(true);
    const content = fragment.querySelector(".case-content");

    fragment.querySelector(".case-label").textContent = study.label;
    fragment.querySelector(".case-title").textContent = study.title;

    study.sections.forEach(([heading, text]) => {
      const headingElement = document.createElement("h4");
      const paragraph = document.createElement("p");

      headingElement.className = "h6 text-primary mt-3";
      headingElement.textContent = heading;
      paragraph.className = "mb-0";
      paragraph.textContent = text;
      content.append(headingElement, paragraph);
    });

    target.appendChild(fragment);
  });
}

function setupNavigation() {
  const navbar = document.getElementById("main-navbar");
  const backToTop = document.getElementById("back-to-top");

  if (!navbar || !backToTop) {
    return;
  }

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    backToTop.classList.toggle("show", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  window.SiteControls.init({
    metadata: {
      en: {
        title: "Nguyen The Thao | IT Infrastructure & Security Consultant for SMEs",
        description: "IT infrastructure, information security, Microsoft 365, backup, and fractional IT management consulting for manufacturers and SMEs."
      },
      vi: {
        title: "Nguyễn Thế Thảo | Tư vấn hạ tầng CNTT và an toàn thông tin",
        description: "Tư vấn hạ tầng CNTT, an toàn thông tin, Microsoft 365, sao lưu và quản lý CNTT đồng hành cho doanh nghiệp sản xuất và SME."
      },
      ja: {
        title: "Nguyễn Thế Thảo | IT インフラ・情報セキュリティ顧問",
        description: "製造業・中小企業向け IT インフラ、情報セキュリティ、Microsoft 365、バックアップ、伴走型 IT 管理支援。"
      }
    },
    onLanguageChange: (language) => {
      renderServices(language);
      renderCaseStudies(language);
    }
  });
});
