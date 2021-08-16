import Nav from '../Nav/Nav'
import './Header.css';

function Header({user}) {
  return (
    <div className = "header">
      <div className="header-title-and-logo">
        <div className="logo">
          <img alt="svgImg" className="logo-image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjAiIGhlaWdodD0iNjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzRmMmRiNSI+PHBhdGggZD0iTTY0LjY3OTE3LDBjLTMxLjAyMDkyLDAgLTU2LjI1ODMzLDI1LjIzNzQyIC01Ni4yNTgzMyw1Ni4yNTgzM2MwLDE1LjQyNjI1IDYuMTY2OTIsMzQuNjA0MjUgMTYuMDkyNzUsNTAuMDUyYzIzLjcxNDE0LDM2LjkwMzY4IDU2LjYyMTMzLDM2Ljg5Njg3IDgwLjMzMTE3LDBjOS45MjU4MywtMTUuNDQ3NzUgMTYuMDkyNzUsLTM0LjYyNTc1IDE2LjA5Mjc1LC01MC4wNTJjMCwtMzEuMDIwOTIgLTI1LjIzNzQyLC01Ni4yNTgzMyAtNTYuMjU4MzMsLTU2LjI1ODMzek01NC4wOTQsMjUuMDI2Yy02LjE0MTgzLDIuMDgxOTIgLTExLjQ5ODkyLDUuOTA1MzMgLTE1LjQ5NDMzLDExLjA2MTc1Yy0wLjU2MjU4LDAuNzI3NDIgLTEuNDExODMsMS4xMTA4MyAtMi4yNjgyNSwxLjExMDgzYy0yLjM0NDkzLDAgLTMuNzMzODMsLTIuNzI1NDggLTIuMjYxMDgsLTQuNjIyNWM0LjY4MzQyLC02LjA0ODY3IDEwLjk3MjE3LC0xMC41MzUgMTguMTg1NDIsLTEyLjk3ODgzYzEuNTAxNDIsLTAuNTA4ODMgMy4xMjgyNSwwLjI5MzgzIDMuNjM3MDgsMS43OTUyNWMwLjUwNTI1LDEuNDk3ODMgLTAuMjk3NDIsMy4xMjQ2NyAtMS43OTg4MywzLjYzMzV6TTI2LjgwMzMzLDQ4LjI4MTgzYzAuMjQ3MjUsLTEuMTgyNSAwLjU1NTQyLC0yLjM2NSAwLjkxMzc1LC0zLjUxODgzYzAuNDY5NDIsLTEuNTEyMTcgMi4wNzQ3NSwtMi4zNTc4MyAzLjU4NjkyLC0xLjg4ODQyYzEuNTEyMTcsMC40Njk0MiAyLjM1NzgzLDIuMDc0NzUgMS44ODg0MiwzLjU4NjkyYy0wLjMwNDU4LDAuOTgxODMgLTAuNTY2MTcsMS45OTIzMyAtMC43Nzc1OCwyLjk5NTY3Yy0wLjMzNDMzLDEuNTk0NTggLTEuOTA4NDgsMi41NDIwMiAtMy4zOTM0MiwyLjIxODA4Yy0xLjU1MTU4LC0wLjMyMjUgLTIuNTQ0MTcsLTEuODQxODMgLTIuMjE4MDgsLTMuMzkzNDJ6TTc1LjA3MDgzLDE0OS4wNjY2N2gtMjAuNzgzMzNjLTIuMjk5MDcsMCAtMy42NzM5OSwtMi41ODkzMiAtMi4zNTc4MywtNC40OTcwOGwyLjk0OTgsLTQuMjcxMzNjMC42NDc1MSwtMC45Mzc0IDEuNzg2NjUsLTEuMzkwMzMgMi45MDY4LC0xLjE4MzU3YzQuNjA4ODgsMC44NTE3NiA5LjIzMjgyLDAuODQxMDEgMTMuNzg0NzIsMC4wMDAzNmMxLjEyMDg3LC0wLjIwNzEyIDIuMjYwMzcsMC4yNDU0NiAyLjkwODIzLDEuMTgzNTdsMi45NDk0NCw0LjI3MDk3YzEuMzE1OCwxLjkwNzQxIC0wLjA1ODc3LDQuNDk3MDggLTIuMzU3ODMsNC40OTcwOHpNMTYzLjU3OTE3LDc2Ljk3YzAsMjAuODc0NzEgLTE1LjQ2NzQ2LDUxLjcxNjgyIC0zNi4wNTkwOCw1Ni40MjY3NWwyLjgxMjkyLDMuNDc1ODNjMS41MTU3NSwxLjg2NzI4IDAuMTc1OTQsNC42NjkwOCAtMi4yMjg4Myw0LjY2OTA4aC0xMi4xODMzM2MtMi40MDUxMywwIC0zLjc0NDIyLC0yLjgwMjE3IC0yLjIyODgzLC00LjY2OTA4bDIuODQxNTgsLTMuNTExNjdjLTUuMjM4ODMsLTEuMjMyNjcgLTEwLjM4MTI4LC00LjE5Mjg2IC0xNS4xNjMyMywtOC43MDY0MmMtMS4xMTIyNywtMS4wNDk1NiAtMS4xODg1OSwtMi44MDUzOSAtMC4xNzUyMiwtMy45NTA5OGMxNy4yNTYyNiwtMTkuNTA5ODIgMzAuNzA5MTcsLTUzLjcwMDU1IDIzLjE0MDA5LC04MS4yNzI4N2MtMC41NDUwMywtMS45ODUxNyAxLjEwOTA0LC0zLjg3MDM2IDMuMTUwNDcsLTMuNjA0MTJjMjAuMzM3OTIsMi42NTM0NiAzNi4wOTM0OCwyMC4wOTQyNiAzNi4wOTM0OCw0MS4xNDM0OHpNNjQuNjc5MTcsMTU0LjhjMS41ODMxMiwwIDIuODY2NjcsMS4yODM1NSAyLjg2NjY3LDIuODY2Njd2MTEuMzY5MmMwLDEuNTI3MjIgLTEuMTUzMTIsMi44NjAyMiAtMi42NzcxMSwyLjk1ODA0Yy0xLjY2OTgzLDAuMTA3MTQgLTMuMDU2MjIsLTEuMjE0MDMgLTMuMDU2MjIsLTIuODYwNTh2LTExLjQ2NjY3YzAsLTEuNTgzMTIgMS4yODM1NSwtMi44NjY2NyAyLjg2NjY3LC0yLjg2NjY3ek0xMjQuOTUwODMsMTUwLjE0MTY3djE4Ljg5MTY5YzAsMS41MjQzNSAtMS4xNDc3NCwyLjg1NzM1IC0yLjY2ODUxLDIuOTU5ODNjLTEuNjY5NDgsMC4xMTI1MiAtMy4wNjQ4MiwtMS4yMTA0NSAtMy4wNjQ4MiwtMi44NTk4NnYtMTguOTkxNjdjMCwtMS41ODMxMiAxLjI4MzU1LC0yLjg2NjY3IDIuODY2NjcsLTIuODY2NjdjMS41ODMxMiwwIDIuODY2NjcsMS4yODM1NSAyLjg2NjY3LDIuODY2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
        <span className="header-title">Project Uplift</span>
        </div>
      </div>
      <Nav user={user}/>
    </div>
  )
}

export default Header;