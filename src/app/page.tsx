import Editor from "./components/Editor/Editor";
import { AppBar, Toolbar, IconButton, Typography, Box, MenuItem, Select } from "@mui/material";
import {
  Undo,
  Redo,
  Print,
  Spellcheck,
  FormatPaint,
  ZoomIn,
  Link,
  InsertPhoto,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatColorText,
  BorderColor,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  FormatListBulleted,
  FormatListNumbered,
  FormatIndentIncrease,
  FormatIndentDecrease,
  StrikethroughS,
  FormatQuote,
  Code,
  Check,
} from "@mui/icons-material";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center bg-gray-200">
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cognitive Intention Translation System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Toolbar */}
      <Box sx={{ width: "75%", mt: 2 }}>
        <AppBar position="static" color="inherit" elevation={1}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="undo">
              <Undo />
            </IconButton>
            <IconButton color="inherit" aria-label="redo">
              <Redo />
            </IconButton>
            <IconButton color="inherit" aria-label="print">
              <Print />
            </IconButton>
            <IconButton color="inherit" aria-label="spellcheck">
              <Spellcheck />
            </IconButton>
            <IconButton color="inherit" aria-label="format-paint">
              <FormatPaint />
            </IconButton>
            <IconButton color="inherit" aria-label="zoom-in">
              <ZoomIn />
            </IconButton>
            <Box sx={{ mx: 2, borderLeft: 1, borderColor: "divider", height: 24 }} />
            <Select
              defaultValue="Normal text"
              variant="outlined"
              size="small"
              sx={{ mx: 1, minWidth: 120 }}
            >
              <MenuItem value="Normal text">Normal text</MenuItem>
              <MenuItem value="Title">Title</MenuItem>
              <MenuItem value="Subtitle">Subtitle</MenuItem>
              <MenuItem value="Heading 1">Heading 1</MenuItem>
              <MenuItem value="Heading 2">Heading 2</MenuItem>
              <MenuItem value="Heading 3">Heading 3</MenuItem>
            </Select>
            <Select
              defaultValue="Arial"
              variant="outlined"
              size="small"
              sx={{ mx: 1, minWidth: 100 }}
            >
              <MenuItem value="Arial">Arial</MenuItem>
              <MenuItem value="Times New Roman">Times New Roman</MenuItem>
              <MenuItem value="Courier New">Courier New</MenuItem>
            </Select>
            <Select
              defaultValue={11}
              variant="outlined"
              size="small"
              sx={{ mx: 1, width: 60 }}
            >
              {[8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72].map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
            <Box sx={{ mx: 2, borderLeft: 1, borderColor: "divider", height: 24 }} />
            <IconButton color="inherit" aria-label="bold">
              <FormatBold />
            </IconButton>
            <IconButton color="inherit" aria-label="italic">
              <FormatItalic />
            </IconButton>
            <IconButton color="inherit" aria-label="underline">
              <FormatUnderlined />
            </IconButton>
            <IconButton color="inherit" aria-label="strikethrough">
              <StrikethroughS />
            </IconButton>
            <IconButton color="inherit" aria-label="text-color">
              <FormatColorText />
            </IconButton>
            <IconButton color="inherit" aria-label="highlight">
              <BorderColor />
            </IconButton>
            <Box sx={{ mx: 2, borderLeft: 1, borderColor: "divider", height: 24 }} />
            <IconButton color="inherit" aria-label="link">
              <Link />
            </IconButton>
            <IconButton color="inherit" aria-label="insert-photo">
              <InsertPhoto />
            </IconButton>
            <Box sx={{ mx: 2, borderLeft: 1, borderColor: "divider", height: 24 }} />
            <IconButton color="inherit" aria-label="align-left">
              <FormatAlignLeft />
            </IconButton>
            <IconButton color="inherit" aria-label="align-center">
              <FormatAlignCenter />
            </IconButton>
            <IconButton color="inherit" aria-label="align-right">
              <FormatAlignRight />
            </IconButton>
            <IconButton color="inherit" aria-label="align-justify">
              <FormatAlignJustify />
            </IconButton>
            <IconButton color="inherit" aria-label="bulleted-list">
              <FormatListBulleted />
            </IconButton>
            <IconButton color="inherit" aria-label="numbered-list">
              <FormatListNumbered />
            </IconButton>
            <IconButton color="inherit" aria-label="indent-increase">
              <FormatIndentIncrease />
            </IconButton>
            <IconButton color="inherit" aria-label="indent-decrease">
              <FormatIndentDecrease />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Editor Container */}
      <div className="flex flex-col my-8 w-3/4 h-5/6 bg-white shadow-lg rounded-md overflow-hidden">
        <div className="h-full">
          <Editor />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full h-16 bg-white flex items-center justify-center border-t border-gray-300">
        <p className="text-sm text-gray-500">&copy; 2024 UNSW AI Society</p>
      </footer>
    </main>
  );
}
