# Minimal Public Design System Inspired by KRDS

KRDS(대한민국 정부 디자인 시스템)의 구조적 철학을 참고해, 공공서비스 디지털 인터페이스에 맞는 **미니멀한 프런트엔드 디자인 시스템**으로 재해석한 포트폴리오 프로젝트입니다.

이 프로젝트는 화려한 브랜딩 UI 키트가 아니라, 다음과 같은 맥락을 목표로 합니다.

- 공공 포털
- 행정/민원 서비스
- 신청/조회/처리 상태 확인 흐름
- 기관형 정보 제공 화면

## Why This Project

공공서비스 UI는 빠른 과업 수행, 일관된 상호작용, 높은 접근성, 명확한 정보 구조가 핵심입니다.  
본 프로젝트는 KRDS의 시스템 사고 방식(원칙-토큰-컴포넌트-패턴-문서화)을 참고해 아래 관점으로 재구성했습니다.

- 더 절제된 미니멀 톤
- 높은 가독성과 예측 가능한 상호작용
- 재사용 가능한 컴포넌트 아키텍처
- Storybook 중심 내부 문서화

## KRDS Inspiration and Originality

- 본 프로젝트는 KRDS의 공공서비스 지향 설계 철학과 구조(원칙/접근성/일관성 중심)를 참고했습니다.
- KRDS 사이트/스타일을 그대로 복제하지 않았으며, 시각/구조/코드 구현 모두 독립적으로 재설계했습니다.
- **이 프로젝트는 KRDS 원칙에서 영감을 받은 오리지널 재해석 작업이며, 직접적인 재현물이 아닙니다.**
- 참고 출처 표기 및 원저작 맥락 존중 원칙을 유지합니다.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)
- Storybook
- class-variance-authority
- Radix UI primitives
- Lucide Icons
- React Hook Form + Zod

## Design Principles

1. 명확성 우선: 핵심 정보와 다음 행동을 빠르게 이해할 수 있도록 구성
2. 접근성 기본값: 대비, 포커스, 라벨, 키보드 사용성 기본 내장
3. 일관된 상호작용: 상태/피드백/컨트롤 동작 규칙 통일
4. 신뢰 중심 표현: 과도한 장식 대신 정확하고 차분한 시각 언어 유지

## Accessibility Approach

- 텍스트 대비 기준(일반 텍스트 4.5:1 이상) 고려
- 모든 인터랙션 요소에 명확한 `:focus-visible` 스타일 제공
- 폼 요소의 라벨/오류 메시지/상태 전달 구조화
- 상태 표현 시 색상 + 텍스트 라벨 병행
- 키보드 탐색 가능한 컴포넌트(Radix 기반) 활용

## Architecture

```txt
src/
  app/
    dashboard/
    notices/
    service-apply/
    status/
    complaint/
    search/
    detail/[id]/
  foundations/
    principles.ts
    tokens.ts
  components/
    ui/
    patterns/
    templates/
  hooks/
    use-pagination.ts
  lib/
    cn.ts
  data/
    mock.ts
  stories/
    foundations/
    primitives/
    patterns/
    examples/
```

## Components

### Primitive UI (`components/ui`)

- Button
- Input
- Textarea
- Select
- Checkbox
- Radio Group
- Switch
- Badge
- Tabs
- Alert
- Dialog
- Drawer
- Tooltip
- Pagination
- Empty State

### Public-service Patterns (`components/patterns`)

- PageHeader
- SectionHeader
- SearchForm
- FilterGroup
- NoticeBanner
- StatusBadge
- InfoList
- DataTable
- PaginationBar
- DetailPanel
- ConfirmDialog
- FormSection
- StepIndicator
- FileAttachmentField

## Example Service Screens

- 공공서비스 대시보드 (`/dashboard`)
- 공지사항 목록 (`/notices`)
- 서비스 신청 폼 (`/service-apply`)
- 처리상태 조회 (`/status`)
- 민원 접수 (`/complaint`)
- 상세보기 (`/detail/[id]`)
- 통합검색 (`/search`)

## Storybook Role

Storybook은 단순 샘플이 아니라 내부 디자인 시스템 문서 역할을 하도록 구성했습니다.

- Foundations: 원칙/토큰/접근성 기준
- Primitives: 컴포넌트 상태와 변형
- Patterns: 공공서비스형 UI 패턴 조합
- Examples: 화면 단위 합성 예시

## Run

```bash
npm install
npm run dev
```

```bash
npm run storybook
```

```bash
npm run typecheck
npm run lint
```

## Implementation Notes

- Token을 의미 기반(semantic role)으로 정의해 테마/확장 대응성을 높였습니다.
- Primitives와 Patterns를 분리해 재사용성과 책임 경계를 명확히 유지했습니다.
- 서비스 화면은 실제 행정 서비스 언어(예: 통합검색, 신청하기, 접수완료, 처리중, 처리완료, 민원 접수, 첨부파일)를 사용해 맥락 적합성을 확보했습니다.
- 폼 예시는 RHF + Zod 조합으로 실무형 유효성 검증 구조를 반영했습니다.
