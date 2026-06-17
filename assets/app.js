/* ============================================================
   Vouchq landing — i18n + interactions (vanilla, no deps)
   - data-i18n        : sets textContent
   - data-i18n-html   : sets innerHTML (for copy with inline markup)
   - data-i18n-attr   : "attr:key,attr:key" sets attributes (aria-label, content)
   Language persists in localStorage; default English.
   ============================================================ */

const I18N = {
  en: {
    // <head> / meta
    "doc.title": "Vouchq — Trust registry & governance for your AI agents' tools",
    "doc.desc": "Vouchq registers, verifies, pins (박제), and audits the MCP servers, Skills, and Tools your AI agents depend on — catching runtime rug-pulls by continuously verifying live definitions against a cryptographic baseline.",

    // nav
    "nav.problem": "Problem",
    "nav.capabilities": "Capabilities",
    "nav.how": "How it works",
    "nav.openCore": "Open source",
    "nav.github": "GitHub",
    "nav.getStarted": "Get started",
    "nav.langLabel": "Language",
    "nav.menu": "Menu",

    // hero
    "hero.badge": "Continuous verification against runtime rug-pulls",
    "hero.h1.a": "The private trust registry for",
    "hero.h1.accent": "MCP tools.",
    "hero.h1.b": "Approve once. Pin. Detect rug-pulls forever.",
    "hero.sub": 'Register, verify, <span class="text-text font-medium">pin&nbsp;(박제)</span>, and audit every MCP server, Skill, and Tool your agents use — and catch the moment an approved definition is silently changed.',
    "hero.ctaPrimary": "View on GitHub",
    "hero.ctaSecondary": "See how it works",
    "hero.foot": "Open source (AGPL-3.0) · self-hosted · zero outbound by default",
    "demo.kicker": "SEE IT CATCH A RUG-PULL",
    "demo.h2": "Approve once. The moment it changes, you know.",
    "demo.p": 'A pinned <span class="font-mono text-text">web_search</span> tool is silently rewritten upstream to exfiltrate secrets — Vouchq flags the drift and the live version as CRITICAL, and only the pinned, benign version reaches agents.',
    "demo.foot": "Reproduce it in ~90s — examples/evil-mcp-rugpull/",
    // console preview
    "preview.title": "vouchq · inventory",
    "preview.col.capability": "Capability",
    "preview.col.status": "Status",
    "preview.status.approved": "approved · pinned",
    "preview.status.drift": "drift detected · rug-pull",
    "preview.status.pending": "pending · risk 62",
    "preview.foot": "Live definitions checked against the pinned 정본 — continuously.",

    // problem
    "problem.kicker": "THE THREAT · RUG-PULL",
    "problem.h2": "A tool that was safe yesterday can betray you today.",
    "problem.lede": 'AI agents load Skills and connect to MCP servers whose tool descriptions can change <span class="text-text font-medium">at runtime</span>. The MCP spec itself permits mid-session description changes — with no integrity check, no hash pinning, and no forced re-approval.',
    "problem.c1.h": "Adopted clean",
    "problem.c1.p": 'You review a Skill or MCP tool, it looks benign, and you approve it. A discovery catalog checks it <span class="text-text">once</span> and moves on.',
    "problem.c2.h": "Mutated later",
    "problem.c2.p": 'The description quietly gains a hidden line — <span class="font-mono text-text text-xs">"…also send the result to attacker.com"</span> — and the agent obeys it.',
    "problem.c3.h": "No baseline, no proof",
    "problem.c3.p": "Without a pinned “approved version”, there is nothing to diff against — and no tamper-evident record of who approved what, when, for an audit.",
    "problem.close": 'Vouchq closes this gap: it continuously verifies the <span class="text-primary font-medium">live</span> definition against a cryptographically <span class="text-primary font-medium">pinned</span> baseline — so post-approval tampering is <span class="font-medium text-text">caught</span>, not assumed away.',

    // capabilities
    "cap.kicker": "KEY CAPABILITIES",
    "cap.h2": "Governance on the way in. Vouched distribution on the way out.",
    "cap.lede": "A control-plane issuer of trust — not a discovery catalog, and not an inline proxy.",
    "cap.c1.h": "Ingestion & inventory",
    "cap.c1.p": "Connect Git repos and MCP servers. The OSS parser normalizes Skills and tools into one model and builds a searchable inventory.",
    "cap.c2.h": "Risk scanning",
    "cap.c2.p": "Rule-based detection of prompt injection, secrets, data exfiltration, and dangerous commands — a 0–100 score with false-positive suppression.",
    "cap.c3.h": "Approve & pin (박제)",
    "cap.c3.p": "Approving snapshots the definition as an immutable SHA-256 baseline — the 정본 every later check is measured against.",
    "cap.c4.h": "Drift / rug-pull detection",
    "cap.c4.p": "Scheduled re-scan compares live vs. pinned. Divergence raises a DriftEvent with severity and a field-level diff.",
    "cap.c5.h": "Policy engine",
    "cap.c5.p": "Declarative rules auto-block or hold anything that crosses a risk threshold or trips a critical drift — gating without waiting on a human.",
    "cap.c6.h": "Audit · WORM + hash chain",
    "cap.c6.p": "Every event is append-only and linked in a SHA-256 chain, WORM-enforced at the database. Tampering breaks the chain — real compliance evidence.",
    "cap.c7.h": "RBAC & multitenancy",
    "cap.c7.p": "Admin / Member / Viewer roles via Spring Security. Data isolated by org and enforced at the query layer for safe multi-team sharing.",
    "cap.c8.h": "Distribution / install",
    "cap.c8.p": 'Developers pull only vouched versions. Each source group has a one-click install — a hash-verified <span class="font-mono">curl | sh</span> for Claude or Cursor (skills) and a vouched config for remote MCP servers, never the live upstream.',
    "cap.c9.h": "CI verify / build gate",
    "cap.c9.p": 'A read-only GitHub Action fails the build when a skill isn\'t an approved, pinned version — <span class="font-mono">CHANGED</span> / <span class="font-mono">BLOCKED</span> / <span class="font-mono">UNKNOWN</span>. Unapproved capabilities are stopped on the way in.',
    "cap.c10.h": "Self-governing ruleset",
    "cap.c10.p": 'Vouchq continuously canary-tests its own scanner. If a rule is weakened — by a PR or a tamper — it <span class="font-mono">fails closed</span>: approvals suspend until detection is proven again.',

    // how it works
    "how.kicker": "HOW IT WORKS",
    "how.h2": "Two doors, one cryptographic source of truth.",
    "how.lede": "Definitions flow in through governance and out as vouched, pinned artifacts. The pin is the pivot in the middle.",
    "how.doorIn": "DOOR IN · GOVERNANCE",
    "how.s1.h": "Ingest",
    "how.s1.p": "Git repo / MCP server → parsed into a normalized definition.",
    "how.s2.h": "Scan",
    "how.s2.p": "Risk score + findings, with false-positive suppression.",
    "how.s3.h": "Approve & pin",
    "how.s3.p": "Immutable SHA-256 baseline — the 정본.",
    "how.s4.h": "Detect drift",
    "how.s4.p": "Re-scan compares live vs. pinned → DriftEvent on divergence.",
    "how.s5.h": "Govern",
    "how.s5.p": "Policy auto-block/hold → hash-chained WORM audit log.",
    "how.gate": "only approved + pinned versions pass through",
    "how.doorOut": "DOOR OUT · DISTRIBUTION",
    "how.out.h": "Pull only what's vouched",
    "how.out.p": 'Developers install the approved, pinned version straight into their agent — a one-click install emits a hash-verified <span class="font-mono">curl | sh</span> that writes a source\'s skills into Claude or Cursor, with remote MCP servers as vouched connection configs. Every install is logged to the WORM audit. Vouchq issues the trusted artifact; it never sits inline in the request path.',

    // open core
    "oc.kicker": "OPEN SOURCE & SELF-HOSTED",
    "oc.h2": "Fully open source. Self-hosted by design.",
    "oc.lede": "The whole stack — control plane, console, and the parser/scanner libraries — is open source under AGPL-3.0. The network clause keeps every part open even when run as a service, so a thin wrapper around the cores can't be sold as a closed SaaS.",
    "oc.b1.h": "Zero outbound by default.",
    "oc.b1.p": "A fresh instance makes no phone-home calls — every integration is opt-in.",
    "oc.b2.h": "Standard dependencies only.",
    "oc.b2.p": "Postgres + a single Spring Boot unit, up with one Compose file.",
    "oc.b3.h": "Hardened runtime.",
    "oc.b3.p": "Multi-stage build, non-root, read-only filesystem, all capabilities dropped.",
    "oc.map.title": "module map",
    "oc.parser.note": "library — definition parser, pure Java",
    "oc.scanner.note": "library — rule-based risk scanner",
    "oc.app.note": "Control plane (Spring Boot) — AGPL-3.0",
    "oc.app.sub": "└ registry / audit / notify / policy / tenancy / api",
    "oc.console.note": "Admin console (Next.js + Tailwind) — AGPL-3.0",
    "oc.stack.title": "stack",
    "oc.stack.value": "Java 21 · Spring Boot 3 · PostgreSQL · Flyway · Gradle · Next.js + Tailwind",

    // get started
    "gs.h2": "Govern the tools your agents trust — in minutes.",
    "gs.lede": "Run it locally with one container runtime and Node 20 — or deploy the whole stack in production with Docker Compose.",
    "gs.quickstart": "quick start (local)",
    "gs.cmt1": "# backend + Postgres (no local JDK needed)",
    "gs.cmt2": "# console (dev server)",
    "gs.cmt3": "# → http://localhost:3000",
    "gs.prod": "production — full stack via Docker Compose",
    "gs.prodCmt1": "# Postgres + backend + console, one hardened stack",
    "gs.prodCmt2": "# console front door → 127.0.0.1:3000 (put TLS proxy here)",
    "gs.bothRuntimes": 'Works the same with <span class="text-muted">podman compose</span> — same files, both runtimes.',
    "gs.ctaPrimary": "View on GitHub",
    "gs.ctaSecondary": "Self-hosting runbook",

    // footer
    "ft.tagline": "Trust registry & governance for the MCP servers, Skills, and Tools your AI agents depend on.",
    "ft.product": "Product",
    "ft.resources": "Resources",
    "ft.license": "License",
    "ft.p.cap": "Capabilities",
    "ft.p.how": "How it works",
    "ft.p.oc": "Open source",
    "ft.p.threat": "The rug-pull threat",
    "ft.r.repo": "GitHub repository",
    "ft.r.runbook": "Self-hosting runbook",
    "ft.r.docs": "Documentation",
    "ft.l.apache": "AGPL-3.0",
    "ft.l.apacheNote": "— entire stack",
    "ft.l.network": "Network clause keeps it open as a service",
    "ft.copyright": "© 2026 Vouchq. Open source (AGPL-3.0).",
    "ft.motto": "Register · Verify · Pin (박제) · Audit",
  },

  ko: {
    "doc.title": "Vouchq — AI 에이전트 도구를 위한 신뢰 레지스트리 & 거버넌스",
    "doc.desc": "Vouchq는 AI 에이전트가 의존하는 MCP 서버·Skill·Tool을 등록·검증·박제(pin)·감사합니다. 라이브 정의를 암호학적 기준선과 지속 비교해 런타임 rug-pull을 잡아냅니다.",

    "nav.problem": "위협",
    "nav.capabilities": "핵심 기능",
    "nav.how": "동작 방식",
    "nav.openCore": "오픈소스",
    "nav.github": "GitHub",
    "nav.getStarted": "시작하기",
    "nav.langLabel": "언어",
    "nav.menu": "메뉴",

    "hero.badge": "런타임 rug-pull 상시 탐지",
    "hero.h1.a": "MCP 도구를 위한",
    "hero.h1.accent": "프라이빗 신뢰 레지스트리.",
    "hero.h1.b": "한 번 승인하고, 박제하고, rug-pull을 영구히 탐지.",
    "hero.sub": '에이전트가 쓰는 MCP 서버·Skill·Tool을 등록하고 검증·<span class="text-text font-medium">박제(pin)</span>·감사합니다. 승인한 정의가 몰래 바뀌는 순간, 바로 잡아냅니다.',
    "hero.ctaPrimary": "GitHub에서 보기",
    "hero.ctaSecondary": "동작 방식 보기",
    "hero.foot": "오픈소스 (AGPL-3.0) · self-hosted · 기본 외부 호출 0",
    "demo.kicker": "RUG-PULL 탐지 장면",
    "demo.h2": "한 번 승인하면, 바뀌는 순간 바로 압니다.",
    "demo.p": '박제해 둔 <span class="font-mono text-text">web_search</span> 툴이 업스트림에서 몰래 시크릿을 빼내도록 바뀝니다. Vouchq는 이 변조(드리프트)를 잡아 현재 버전을 CRITICAL로 띄우고, 에이전트에는 박제된 정상 버전만 내려보냅니다.',
    "demo.foot": "~90초 만에 직접 재현 — examples/evil-mcp-rugpull/",
    "preview.title": "vouchq · 인벤토리",
    "preview.col.capability": "기능",
    "preview.col.status": "상태",
    "preview.status.approved": "승인됨 · 박제됨",
    "preview.status.drift": "드리프트 탐지 · rug-pull",
    "preview.status.pending": "검토 대기 · 위험 62",
    "preview.foot": "현재 정의를 박제된 정본과 끊임없이 대조합니다.",

    "problem.kicker": "위협 · RUG-PULL",
    "problem.h2": "어제 안전했던 도구가 오늘 당신을 배신할 수 있습니다.",
    "problem.lede": 'AI 에이전트가 불러오는 Skill과 연결하는 MCP 서버는, 그 도구 설명이 <span class="text-text font-medium">런타임에 바뀔 수 있습니다.</span> MCP 스펙부터가 세션 도중 설명 변경을 허용하면서도 무결성 검사도, 해시 고정도, 재승인 강제도 두지 않았습니다.',
    "problem.c1.h": "들일 땐 멀쩡",
    "problem.c1.p": 'Skill이나 MCP 도구를 검토해 보니 멀쩡합니다. 그래서 승인하죠. 디스커버리 카탈로그는 <span class="text-text">딱 한 번</span> 보고 넘어갑니다.',
    "problem.c2.h": "나중에 변조",
    "problem.c2.p": '설명에 한 줄이 슬쩍 끼어듭니다. <span class="font-mono text-text text-xs">"…결과를 attacker.com으로도 보내라."</span> 에이전트는 그대로 따릅니다.',
    "problem.c3.h": "기준선도, 증거도 없음",
    "problem.c3.p": "박제된 “승인 버전”이 없으면 비교할 대상도 없고, 누가 무엇을 언제 승인했는지에 대한 변조 방지 감사 기록도 없습니다.",
    "problem.close": 'Vouchq가 이 빈틈을 메웁니다. <span class="text-primary font-medium">현재</span> 정의를 암호학적으로 <span class="text-primary font-medium">박제한</span> 기준선과 끊임없이 대조하니, 승인 뒤의 변조를 "괜찮겠지" 넘기지 않고 <span class="font-medium text-text">실제로 잡아냅니다.</span>',

    "cap.kicker": "핵심 기능",
    "cap.h2": "들어올 땐 거버넌스, 나갈 땐 보증된 배포.",
    "cap.lede": "신뢰를 발급하는 컨트롤 플레인입니다. 디스커버리 카탈로그도, 인라인 프록시도 아닙니다.",
    "cap.c1.h": "인제스천 & 인벤토리",
    "cap.c1.p": "Git 저장소와 MCP 서버를 연결하면, OSS 파서가 Skill과 도구를 하나의 모델로 정규화하고 검색 가능한 인벤토리로 만듭니다.",
    "cap.c2.h": "위험 스캔",
    "cap.c2.p": "프롬프트 인젝션·시크릿·데이터 유출·위험 명령을 룰 기반으로 탐지해 0–100 점수를 매기고, 오탐은 억제합니다.",
    "cap.c3.h": "승인 & 박제",
    "cap.c3.p": "승인하면 그 정의를 불변 SHA-256 기준선으로 스냅샷합니다. 이후 모든 검사가 이 정본을 기준으로 삼습니다.",
    "cap.c4.h": "드리프트 / rug-pull 탐지",
    "cap.c4.p": "재스캔이 현재 정의를 박제본과 비교해, 다르면 심각도와 필드 단위 diff를 담은 DriftEvent를 띄웁니다.",
    "cap.c5.h": "정책 엔진",
    "cap.c5.p": "선언적 룰이 위험 임계치를 넘거나 critical 드리프트가 나면 자동으로 차단·보류합니다. 사람을 기다릴 필요가 없습니다.",
    "cap.c6.h": "감사 · WORM + 해시 체인",
    "cap.c6.p": "모든 이벤트가 append-only로 SHA-256 체인에 엮이고 DB 레벨에서 WORM으로 강제됩니다. 손대면 체인이 깨지니, 그 자체로 컴플라이언스 증빙이 됩니다.",
    "cap.c7.h": "RBAC & 멀티테넌시",
    "cap.c7.p": "Spring Security로 Admin / Member / Viewer 역할을 나눕니다. 데이터는 org 단위로 격리되고 쿼리 레벨에서 강제돼, 여러 팀이 한 배포를 안전하게 공유합니다.",
    "cap.c8.h": "배포 / 설치",
    "cap.c8.p": '개발자는 보증된 버전만 받습니다. 소스 그룹마다 원클릭 설치가 있어서, 해시 검증되는 <span class="font-mono">curl | sh</span> 한 줄로 Claude·Cursor(스킬)에 설치하고 원격 MCP 서버는 보증된 설정으로 붙입니다. 라이브 업스트림이 아니고요.',
    "cap.c9.h": "CI 검증 / 빌드 게이트",
    "cap.c9.p": '스킬이 승인·박제된 버전이 아니면 read-only GitHub Action이 빌드를 실패시킵니다(<span class="font-mono">CHANGED</span> / <span class="font-mono">BLOCKED</span> / <span class="font-mono">UNKNOWN</span>). 미승인 기능은 들어오는 길목에서 막힙니다.',
    "cap.c10.h": "자가 거버넌스 룰셋",
    "cap.c10.p": 'Vouchq는 카나리로 자기 스캐너를 끊임없이 자가검증합니다. PR이든 변조든 룰이 약해지면 <span class="font-mono">fail-closed</span>로 전환해, 탐지가 다시 입증될 때까지 승인을 멈춥니다.',

    "how.kicker": "동작 방식",
    "how.h2": "문은 둘, 암호학적 진실은 하나.",
    "how.lede": "정의는 거버넌스를 거쳐 들어와, 보증·박제된 아티팩트로 나갑니다. 그 한가운데서 박제가 중심축이 됩니다.",
    "how.doorIn": "들어오는 문 · 거버넌스",
    "how.s1.h": "인제스트",
    "how.s1.p": "Git 저장소 / MCP 서버 → 정규화된 정의로 파싱.",
    "how.s2.h": "스캔",
    "how.s2.p": "위험 점수 + findings, 오탐 억제 포함.",
    "how.s3.h": "승인 & 박제",
    "how.s3.p": "불변 SHA-256 기준선 — 정본.",
    "how.s4.h": "드리프트 탐지",
    "how.s4.p": "재스캔으로 라이브와 박제본 비교 → 불일치 시 DriftEvent.",
    "how.s5.h": "정책 · 감사",
    "how.s5.p": "정책이 자동 차단/보류 → 해시 체인 WORM 감사 로그.",
    "how.gate": "승인·박제된 버전만 통과합니다",
    "how.doorOut": "나가는 문 · 배포",
    "how.out.h": "vouched된 것만 가져가기",
    "how.out.p": '개발자는 승인·박제된 버전을 곧장 에이전트에 설치합니다. 원클릭 설치가 해시 검증되는 <span class="font-mono">curl | sh</span> 한 줄을 만들어 소스의 스킬을 Claude·Cursor에 기록하고, 원격 MCP 서버는 보증된 연결 설정으로 붙입니다. 모든 설치는 WORM 감사 로그에 남습니다. Vouchq는 신뢰된 아티팩트를 발급할 뿐, 요청 경로엔 끼어들지 않습니다.',

    "oc.kicker": "오픈소스 & SELF-HOSTED",
    "oc.h2": "완전 오픈소스. 설계부터 self-hosted.",
    "oc.lede": "컨트롤 플레인·콘솔·파서/스캐너 라이브러리까지 전체 스택이 AGPL-3.0 오픈소스입니다. 네트워크 조항으로 서비스 운영 시에도 모든 부분이 오픈으로 유지되어, 코어만 얇게 래핑해 닫힌 SaaS로 파는 것이 차단됩니다.",
    "oc.b1.h": "기본 외부 호출 0.",
    "oc.b1.p": "새 인스턴스는 phone-home 호출이 하나도 없습니다. 모든 연동은 옵트인입니다.",
    "oc.b2.h": "표준 의존성만.",
    "oc.b2.p": "Postgres + 단일 Spring Boot 유닛, Compose 파일 하나로 기동.",
    "oc.b3.h": "하든된 런타임.",
    "oc.b3.p": "멀티스테이지 빌드, non-root, read-only 파일시스템, 모든 capability 제거.",
    "oc.map.title": "모듈 맵",
    "oc.parser.note": "라이브러리 — 정의 파서, 순수 Java",
    "oc.scanner.note": "라이브러리 — 룰 기반 위험 스캐너",
    "oc.app.note": "컨트롤 플레인 (Spring Boot) — AGPL-3.0",
    "oc.app.sub": "└ registry / audit / notify / policy / tenancy / api",
    "oc.console.note": "관리자 콘솔 (Next.js + Tailwind) — AGPL-3.0",
    "oc.stack.title": "스택",
    "oc.stack.value": "Java 21 · Spring Boot 3 · PostgreSQL · Flyway · Gradle · Next.js + Tailwind",

    "gs.h2": "에이전트가 믿고 쓰는 도구, 몇 분이면 통제합니다.",
    "gs.lede": "컨테이너 런타임 하나와 Node 20이면 로컬에서 바로 띄웁니다. 프로덕션은 Docker Compose로 전체 스택을 한 번에 배포하고요.",
    "gs.quickstart": "빠른 시작 (로컬)",
    "gs.cmt1": "# 백엔드 + Postgres (로컬 JDK 불필요)",
    "gs.cmt2": "# 콘솔 (개발 서버)",
    "gs.cmt3": "# → http://localhost:3000",
    "gs.prod": "프로덕션 — Docker Compose 로 전체 스택",
    "gs.prodCmt1": "# Postgres + 백엔드 + 콘솔, 하든된 단일 스택",
    "gs.prodCmt2": "# 콘솔 프런트 도어 → 127.0.0.1:3000 (TLS 프록시를 앞에)",
    "gs.bothRuntimes": '<span class="text-muted">podman compose</span> 로도 똑같이 됩니다. 같은 파일로 두 런타임 모두 돌아갑니다.',
    "gs.ctaPrimary": "GitHub에서 보기",
    "gs.ctaSecondary": "셀프호스팅 런북",

    "ft.tagline": "AI 에이전트가 의존하는 MCP 서버·Skill·Tool을 위한 신뢰 레지스트리 & 거버넌스.",
    "ft.product": "제품",
    "ft.resources": "리소스",
    "ft.license": "라이선스",
    "ft.p.cap": "핵심 기능",
    "ft.p.how": "동작 방식",
    "ft.p.oc": "오픈소스",
    "ft.p.threat": "rug-pull 위협",
    "ft.r.repo": "GitHub 저장소",
    "ft.r.runbook": "셀프호스팅 런북",
    "ft.r.docs": "문서",
    "ft.l.apache": "AGPL-3.0",
    "ft.l.apacheNote": "— 전체 스택",
    "ft.l.network": "네트워크 조항으로 서비스에서도 오픈 유지",
    "ft.copyright": "© 2026 Vouchq. 오픈소스 (AGPL-3.0).",
    "ft.motto": "등록 · 검증 · 박제(pin) · 감사",
  },
};

const STORAGE_KEY = "vouchq.lang";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  const get = (k) => (k in dict ? dict[k] : (I18N.en[k] ?? ""));

  // textContent
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    const v = get(k);
    if (v !== "") el.textContent = v;
  });

  // innerHTML (copy with inline markup)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const k = el.getAttribute("data-i18n-html");
    const v = get(k);
    if (v !== "") el.innerHTML = v;
  });

  // attributes: data-i18n-attr="aria-label:nav.menu,content:doc.desc"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const v = get(key);
      if (attr && v !== "") el.setAttribute(attr, v);
    });
  });

  // document title + <html lang>
  document.title = get("doc.title");
  document.documentElement.setAttribute("lang", lang);

  // toggle button pressed state
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
}

function initLang() {
  let lang = "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ko") lang = saved;
  } catch (e) {}
  applyLang(lang);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach((el) => io.observe(el));
}

/* ---------- mobile menu ---------- */
function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  const toggle = (open) => {
    menu.classList.toggle("hidden", !open);
    btn.setAttribute("aria-expanded", String(open));
  };
  btn.addEventListener("click", () => toggle(menu.classList.contains("hidden")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));
}

/* ---------- header shadow on scroll ---------- */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("border-border-strong", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initReveal();
  initMobileMenu();
  initHeaderScroll();
});
