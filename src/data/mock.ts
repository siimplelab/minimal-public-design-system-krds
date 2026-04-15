export const quickServices = [
  "복지 급여 신청",
  "주민등록 등초본 발급",
  "공공시설 예약",
  "민원 접수",
  "처리상태 조회",
  "자주 묻는 질문",
] as const;

export const dashboardStats = [
  { label: "신청 대기", value: 12, description: "오늘 접수된 신규 신청" },
  { label: "처리중", value: 37, description: "담당 부서 검토 단계" },
  { label: "처리완료", value: 84, description: "최근 7일 기준" },
] as const;

export const notices = [
  {
    id: "N-2026-001",
    title: "2026년 청년 주거지원 신청 일정 안내",
    category: "복지",
    date: "2026-04-10",
    important: true,
  },
  {
    id: "N-2026-002",
    title: "시스템 점검 안내 (4월 20일 23:00~24:00)",
    category: "시스템",
    date: "2026-04-08",
    important: false,
  },
  {
    id: "N-2026-003",
    title: "민원 처리 기준 및 제출서류 업데이트",
    category: "민원",
    date: "2026-04-05",
    important: false,
  },
  {
    id: "N-2026-004",
    title: "2026년 2분기 복지 서비스 설명회 안내",
    category: "복지",
    date: "2026-04-01",
    important: false,
  },
] as const;

export const applications = [
  {
    id: "AP-260401-1082",
    service: "청년 주거지원",
    applicant: "김민수",
    submittedAt: "2026-04-01",
    status: "처리중" as const,
  },
  {
    id: "AP-260403-2091",
    service: "긴급생활지원",
    applicant: "박서연",
    submittedAt: "2026-04-03",
    status: "접수완료" as const,
  },
  {
    id: "AP-260325-9841",
    service: "아이돌봄 서비스",
    applicant: "이정훈",
    submittedAt: "2026-03-25",
    status: "처리완료" as const,
  },
] as const;

export const searchResults = [
  {
    id: "SR-001",
    type: "공지사항",
    title: "청년 주거지원 신청 일정 안내",
    snippet: "신청 기간은 2026년 5월 1일부터 5월 14일까지입니다.",
    updatedAt: "2026-04-10",
  },
  {
    id: "SR-002",
    type: "서비스 안내",
    title: "주거지원 자격요건 및 제출서류",
    snippet: "소득 기준, 거주 요건, 필수 서류를 단계별로 확인할 수 있습니다.",
    updatedAt: "2026-04-09",
  },
  {
    id: "SR-003",
    type: "FAQ",
    title: "처리상태 조회가 보이지 않습니다",
    snippet: "접수 후 최대 1시간 내 상태 조회 메뉴에서 확인 가능합니다.",
    updatedAt: "2026-04-06",
  },
] as const;
