const localizedContent = {
  en: {
    services: [
      { icon: "fa-solid fa-magnifying-glass-chart", title: "IT infrastructure and security assessment", description: "Clarify infrastructure status and security risk so investment priorities are grounded in evidence.", deliverables: ["Current-state and risk report", "Right-sized infrastructure diagram", "Prioritised recommendations and action plan"] },
      { icon: "fa-solid fa-network-wired", title: "Network and security consulting", description: "Design or review networks, VLANs, firewalls, VPNs, Wi-Fi and continuity measures for the business.", deliverables: ["Recommended architecture or improvement plan", "Access control and network segmentation principles", "Technical alignment with internal IT or vendors"] },
      { icon: "fa-solid fa-user-tie", title: "Virtual IT manager", description: "Provide periodic leadership and technical perspective for businesses with an internal IT team.", deliverables: ["Review of systems and IT roadmap", "Guidance on vendors, budgets and investment", "Oversight of backup, security and operational priorities"] }
    ],
    caseStudies: [
      { label: "Capability 01", title: "Enterprise network infrastructure consulting and deployment", sections: [["Scope", "Assess operating needs, user count, office and factory areas, and business-critical systems."], ["Approach", "Design the Internet connection, firewall, core switch, VLAN, Wi-Fi, VPN and role-based network segmentation."], ["Value delivered", "A clear, scalable and maintainable infrastructure with a sound basis for faster incident resolution."]] },
      { label: "Capability 02", title: "Security risk analysis and remediation", sections: [["Scope", "Assess access rights, privileged accounts, endpoints, backup, firewall policies, Microsoft 365 and critical data flows."], ["Approach", "Identify weaknesses, impact and priority, then recommend controls that fit the organisation's resources."], ["Value delivered", "A clear risk register, an achievable improvement plan and practical measures to reduce disruption before incidents occur."]] },
      { label: "Capability 03", title: "IT investment and cost optimisation", sections: [["Scope", "Assess operational needs, user count, growth plans, current systems and available investment budget."], ["Advisory approach", "Recommend appropriate equipment, network and server design, application editions, cloud services and license quantities."], ["Value delivered", "Right-sized investment that avoids excess equipment or licenses, controls operating cost and preserves future scalability."]] }
    ]
  },
  vi: {
    services: [
      { icon: "fa-solid fa-magnifying-glass-chart", title: "Đánh giá hạ tầng và bảo mật CNTT", description: "Đánh giá hiện trạng hạ tầng và rủi ro bảo mật để doanh nghiệp xác định đúng ưu tiên đầu tư.", deliverables: ["Báo cáo hiện trạng và rủi ro", "Sơ đồ hạ tầng ở mức phù hợp", "Khuyến nghị ưu tiên và kế hoạch hành động"] },
      { icon: "fa-solid fa-network-wired", title: "Tư vấn mạng và bảo mật", description: "Tư vấn thiết kế hoặc rà soát network, VLAN, firewall, VPN, Wi-Fi và phương án duy trì hoạt động liên tục.", deliverables: ["Đề xuất kiến trúc hoặc phương án cải thiện", "Nguyên tắc phân tách mạng và kiểm soát truy cập", "Trao đổi kỹ thuật với đội CNTT hoặc nhà cung cấp"] },
      { icon: "fa-solid fa-user-tie", title: "Quản lý CNTT đồng hành", description: "Đồng hành định kỳ cùng doanh nghiệp đã có nhân sự CNTT nhưng cần góc nhìn quản trị và kỹ thuật ở cấp độ cao hơn.", deliverables: ["Rà soát hệ thống và lộ trình CNTT", "Tư vấn nhà cung cấp, ngân sách và đầu tư", "Theo dõi backup, bảo mật và ưu tiên vận hành"] }
    ],
    caseStudies: [
      { label: "Năng lực 01", title: "Tư vấn và triển khai hạ tầng mạng doanh nghiệp", sections: [["Phạm vi", "Khảo sát nhu cầu vận hành, số lượng người dùng, khu vực văn phòng, nhà xưởng và các hệ thống quan trọng."], ["Cách tiếp cận", "Thiết kế kiến trúc Internet, firewall, core switch, VLAN, Wi-Fi, VPN và phân tách mạng theo vai trò sử dụng."], ["Giá trị mang lại", "Hạ tầng có cấu trúc rõ ràng, dễ mở rộng, dễ bàn giao vận hành và có cơ sở để xử lý sự cố nhanh hơn."]] },
      { label: "Năng lực 02", title: "Phân tích và xử lý rủi ro bảo mật", sections: [["Phạm vi", "Đánh giá quyền truy cập, tài khoản quản trị, thiết bị đầu cuối, backup, firewall policy, Microsoft 365 và luồng dữ liệu quan trọng."], ["Cách tiếp cận", "Xác định điểm yếu, mức độ ảnh hưởng và thứ tự ưu tiên; sau đó đề xuất biện pháp kiểm soát phù hợp với nguồn lực doanh nghiệp."], ["Giá trị mang lại", "Doanh nghiệp có danh sách rủi ro rõ ràng, kế hoạch cải thiện khả thi và cơ chế giảm thiểu sự cố trước khi gây gián đoạn vận hành."]] },
      { label: "Năng lực 03", title: "Tối ưu đầu tư và chi phí CNTT", sections: [["Phạm vi", "Đánh giá nhu cầu vận hành, số lượng người dùng, mức độ tăng trưởng, hệ thống hiện có và ngân sách đầu tư của doanh nghiệp."], ["Giải pháp tư vấn", "Đề xuất thiết bị phù hợp, thiết kế hệ thống network và server theo nhu cầu thực tế; lựa chọn phiên bản ứng dụng, dịch vụ đám mây và số lượng license cần thiết."], ["Giá trị mang lại", "Giúp doanh nghiệp đầu tư đúng quy mô, tránh mua dư thiết bị hoặc license, kiểm soát chi phí vận hành và vẫn bảo đảm khả năng mở rộng trong tương lai."]] }
    ]
  },
  ja: {
    services: [
      { icon: "fa-solid fa-magnifying-glass-chart", title: "IT インフラ・セキュリティ評価", description: "インフラの現状とセキュリティリスクを可視化し、根拠ある投資優先順位を明確にします。", deliverables: ["現状とリスクの報告書", "適切な粒度のインフラ構成図", "優先度付きの提案と行動計画"] },
      { icon: "fa-solid fa-network-wired", title: "ネットワーク・セキュリティ コンサルティング", description: "ネットワーク、VLAN、ファイアウォール、VPN、Wi-Fi、事業継続対策の設計またはレビューを行います。", deliverables: ["推奨アーキテクチャまたは改善計画", "アクセス制御とネットワーク分離の原則", "社内 IT チームやベンダーとの技術的なすり合わせ"] },
      { icon: "fa-solid fa-user-tie", title: "バーチャル IT マネージャー", description: "社内 IT チームを持つ企業に、定期的な経営・技術視点の支援を提供します。", deliverables: ["システムと IT ロードマップのレビュー", "ベンダー、予算、投資に関する助言", "バックアップ、セキュリティ、運用優先事項の確認"] }
    ],
    caseStudies: [
      { label: "専門性 01", title: "企業ネットワーク基盤の設計・導入支援", sections: [["対象範囲", "運用要件、利用者数、オフィス・工場エリア、重要システムを確認します。"], ["進め方", "インターネット回線、ファイアウォール、コアスイッチ、VLAN、Wi-Fi、VPN、役割に応じたネットワーク分離を設計します。"], ["提供価値", "拡張しやすく、運用・引継ぎしやすい、障害対応の基盤となる明確なインフラを整えます。"]] },
      { label: "専門性 02", title: "セキュリティリスクの分析と改善", sections: [["対象範囲", "アクセス権、特権アカウント、端末、バックアップ、ファイアウォールポリシー、Microsoft 365、重要なデータフローを評価します。"], ["進め方", "弱点、影響度、優先順位を特定し、企業のリソースに合った対策を提案します。"], ["提供価値", "明確なリスク一覧、実行可能な改善計画、障害発生前に業務中断を減らす実務的な対策を提供します。"]] },
      { label: "専門性 03", title: "IT 投資とコストの最適化", sections: [["対象範囲", "運用要件、利用者数、成長計画、既存システム、投資予算を評価します。"], ["助言内容", "適切な機器、ネットワーク・サーバー設計、アプリケーションの版、クラウドサービス、ライセンス数を提案します。"], ["提供価値", "過剰な機器やライセンスを避け、運用コストを管理しながら将来の拡張性を確保します。"]] }
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
      vi: { title: "Nguyễn Thế Thảo | Chuyên gia tư vấn hạ tầng và bảo mật CNTT", description: "Nguyễn Thế Thảo tư vấn hạ tầng và bảo mật CNTT cho doanh nghiệp sản xuất và SME." },
      ja: { title: "Nguyễn Thế Thảo | IT インフラ・セキュリティ コンサルタント", description: "製造業と中小企業のための IT インフラ・セキュリティ コンサルティング。" }
    },
    onLanguageChange: (language) => {
      renderServices(language);
      renderCaseStudies(language);
    }
  });
});
