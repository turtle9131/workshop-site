# AI 멀티툴 실습 워크숍 안내 사이트

사내 실습 세미나 참석자가 따라 할 수 있는 정적 안내 페이지입니다.
`NotebookLM → Gemini + Canvas → Claude` 흐름으로 제안서/기획서 초안을 작성합니다.

## 구성

| 파일 | 설명 |
|------|------|
| `index.html` | 첫 화면 · 실습 안내(개요·도구·준비물·A/B 그룹 선택) |
| `group-a.html` | A그룹 · 제안서형 실습 (교시별 단계 + 복사용 프롬프트) |
| `group-b.html` | B그룹 · 기획서형 실습 (교시별 단계 + 복사용 프롬프트) |
| `style.css` | 공통 디자인 시스템 |
| `copy.js` | 프롬프트 복사 버튼 동작 |

## GitHub Pages 배포 방법

1. 이 폴더의 파일 전체를 GitHub 저장소(`turtle9131/LLM`)에 업로드합니다.
   - 저장소 루트에 그대로 올리거나, `/docs` 폴더에 넣어도 됩니다.
2. 저장소 → **Settings → Pages** 로 이동합니다.
3. **Source** 를 `Deploy from a branch` 로 설정하고,
   브랜치는 `main`, 폴더는 `/ (root)` (또는 `/docs`)를 선택 후 **Save**.
4. 1~2분 뒤 아래 주소로 안내 페이지가 공개됩니다.

```
https://turtle9131.github.io/LLM/
```

> 참석자에게는 위 주소만 공유하면 됩니다. 첫 화면에서 A/B 그룹을 선택해 실습을 시작합니다.

## 로컬 미리보기

```bash
cd workshop-site
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```
