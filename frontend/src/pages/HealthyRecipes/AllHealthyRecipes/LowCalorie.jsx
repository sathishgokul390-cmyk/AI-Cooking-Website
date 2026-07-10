import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import NatureOutlinedIcon from "@mui/icons-material/NatureOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";


/* ═══════════════════════════════════════════
   Inline styles — all scoped to this file
   ═══════════════════════════════════════════ */
const S = {
  /* section */
  section: {
    width: "100%",
    minHeight: 700,
    background: "#FFFFFF",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  /* bg blobs */
  blob1: {
    position: "absolute", top: -100, right: -80,
    width: 500, height: 500, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(234,247,234,0.7) 0%, transparent 70%)",
    pointerEvents: "none", zIndex: 0,
  },
  blob2: {
    position: "absolute", bottom: -60, left: "10%",
    width: 300, height: 300, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(234,247,234,0.5) 0%, transparent 70%)",
    pointerEvents: "none", zIndex: 0,
  },
  /* container */
  container: {
    maxWidth: 1400, margin: "0 auto",
    display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "60px 80px",
    gap: 50, position: "relative", zIndex: 2,
    minHeight: 700, boxSizing: "border-box",
  },
};


/* ── Keyframe injection (once) ── */
const KEYFRAMES = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
@keyframes lcFadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
@keyframes lcFadeLeft { from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
@keyframes lcFadeIn   { from{opacity:0;transform:scale(.94)} to{opacity:1;transform:scale(1)} }
@keyframes lcFloat    { 0%,100%{transform:translateY(0) rotate(-8deg)} 50%{transform:translateY(-12px) rotate(6deg)} }
@keyframes lcPulse    { 0%,100%{box-shadow:0 6px 24px rgba(46,125,50,.18),0 0 0 0 rgba(46,125,50,.15)} 50%{box-shadow:0 6px 24px rgba(46,125,50,.18),0 0 0 12px rgba(46,125,50,0)} }
@keyframes lcBtnHover { to{transform:scale(1.03)} }
`;

function InjectStyles() {
  return <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />;
}

/* ── Inline SVG leaf ── */
function Leaf({ style }) {
  return (
    <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" style={{
        pointerEvents: "none", userSelect: "none",
        filter: "drop-shadow(0 4px 10px rgba(46,125,50,.20))", ...style
      }}>
      <path d="M30 75 C10 55 0 35 8 15 C16 -5 44 -5 52 15 C60 35 50 55 30 75Z"
        fill="#4CAF50" opacity="0.82" />
      <line x1="30" y1="75" x2="30" y2="12" stroke="#2E7D32" strokeWidth="1.5" opacity="0.5" />
      <path d="M30 50 C22 42 16 32 20 22" stroke="#2E7D32" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M30 50 C38 42 44 32 40 22" stroke="#2E7D32" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}


/* ── Feature item ── */
function FeatureItem({ icon: Icon, line1, line2 }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "7px", flex: 1 }}>
      <Box sx={{
        width: 46, height: 46, borderRadius: "50%", background: "#EAF7EA",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <Icon sx={{ fontSize: 20, color: "#2E7D32" }} />
      </Box>
      <Typography sx={{
        fontFamily: "'Poppins',sans-serif", fontSize: "11.5px", fontWeight: 500,
        color: "#1C1C1C", textAlign: "center", lineHeight: 1.3
      }}>
        {line1}<br />{line2}
      </Typography>
    </Box>
  );
}

/* ── Benefit row (floating card) ── */
function BenefitRow({ icon: Icon, label, iconColor }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Icon sx={{ fontSize: 18, color: iconColor || "#2E7D32", flexShrink: 0 }} />
      <Typography sx={{
        fontFamily: "'Poppins',sans-serif", fontSize: "13.5px",
        fontWeight: 600, color: "#1C1C1C", whiteSpace: "nowrap"
      }}>
        {label}
      </Typography>
    </Box>
  );
}

/* ── Banner strip item ── */
const BANNER_ITEMS = [
  { icon: LocalFireDepartmentOutlinedIcon, iconColor: "#c2410c", label: "Burn Fat", sub: "Support weight loss" },
  { icon: FavoriteIcon, iconColor: "#2E7D32", label: "Heart Healthy", sub: "Good for your heart" },
  { icon: BoltOutlinedIcon, iconColor: "#2E7D32", label: "Boosts Energy", sub: "Keeps you active" },
  { icon: SpaOutlinedIcon, iconColor: "#2E7D32", label: "Better Digestion", sub: "Light & easy to digest" },
];

function BannerStrip({ isMobile }) {
  return (
    <Box
      component="section"
      aria-label="Health benefits banner"
      sx={{
        width: "100%",
        background: "#FFFFFF",
        borderTop: "1.5px solid #F0F0F0",
        borderBottom: "1.5px solid #F0F0F0",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: isMobile ? "20px 20px" : "0 80px",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: 0,
        }}
      >
        {BANNER_ITEMS.map((item, i) => {
          const IconComp = item.icon;
          const isLast = i === BANNER_ITEMS.length - 1;
          return (
            <Box
              key={item.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: isMobile ? "16px 10px" : "28px 32px",
                borderRight: (!isMobile && !isLast)
                  ? "1.5px solid #F0F0F0"
                  : "none",
                /* on mobile add bottom border between rows */
                borderBottom: (isMobile && i < 2)
                  ? "1.5px solid #F0F0F0"
                  : "none",
              }}
            >
              {/* Icon circle */}
              <Box sx={{
                width: 46, height: 46, borderRadius: "50%",
                background: "#F3FAF3",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <IconComp sx={{ fontSize: 22, color: item.iconColor }} />
              </Box>

              {/* Text */}
              <Box>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: isMobile ? "13px" : "15px",
                  fontWeight: 700,
                  color: "#1C1C1C",
                  lineHeight: 1.3,
                }}>
                  {item.label}
                </Typography>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: isMobile ? "11px" : "12.5px",
                  fontWeight: 400,
                  color: "#888888",
                  lineHeight: 1.4,
                  mt: "2px",
                }}>
                  {item.sub}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

/* ── Avatar images ── */
const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
];

const BOWL =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=85&auto=format&fit=crop";


/* ════════════════════════════════════════════════════════
   AIChefSection — AI Chef + Stats + Calorie Guide + Newsletter
   ════════════════════════════════════════════════════════ */

const INGREDIENT_ICONS = [
  { icon: "🥬", label: "Spinach" },
  { icon: "🍅", label: "Tomato" },
  { icon: "🥒", label: "Cucumber" },
  { icon: "🍗", label: "Chicken" },
  { icon: "🥙", label: "Quinoa" },
];

// const STATS = [
//   { icon: "🔖", number: "500+", label: "Low Calorie\nRecipes" },
//   { icon: "💚", number: "100%", label: "Healthy &\nNutritious" },
//   { icon: "👥", number: "10K+", label: "Happy\nUsers" },
//   { icon: "⭐", number: "4.8", label: "Average\nRating" },
// ];

function AIChefSection({ isMobile }) {
  const [email, setEmail] = React.useState("");

  return (
    <Box component="section" aria-label="AI Chef & Tools"
      sx={{
        width: "100%", background: "#F9FDF9", borderTop: "1.5px solid #F0F0F0",
        fontFamily: "'Poppins',sans-serif", boxSizing: "border-box",
        px: isMobile ? "16px" : "40px", py: isMobile ? "32px" : "48px"
      }}>

      {/* ── 3-column grid (stacks on mobile) ── */}
      <Box sx={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 320px 1fr",
        gap: isMobile ? "24px" : "32px", alignItems: "start"
      }}>

        {/* ═══ LEFT: AI Chef Card ═══ */}
        <Box sx={{
          background: "#fff", borderRadius: "24px", border: "1.5px solid #E8F5E9",
          boxShadow: "0 6px 24px rgba(46,125,50,.09)", p: isMobile ? "24px 20px" : "32px 28px",
          display: "flex", flexDirection: "column", gap: "16px", position: "relative", overflow: "hidden"
        }}>

          {/* floating leaf decoration */}
          <Box aria-hidden="true" sx={{
            position: "absolute", top: -20, right: -20,
            width: 120, height: 120, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,195,74,0.12) 0%, transparent 70%)"
          }} />

          {/* AI Chef robot illustration placeholder */}
          <Box sx={{
            width: isMobile ? 100 : 120, height: isMobile ? 100 : 120,
            borderRadius: "50%", background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: isMobile ? "48px" : "56px", alignSelf: "flex-start",
            boxShadow: "0 4px 16px rgba(46,125,50,.15)"
          }}>
            🤖
          </Box>

          <Box>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: isMobile ? "20px" : "24px", fontWeight: 800,
              color: "#1C1C1C", lineHeight: 1.2, mb: "8px"
            }}>
              Let AI Chef Find Your<br />Perfect Low Calorie Recipe!
            </Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: isMobile ? "13px" : "14px", fontWeight: 400,
              color: "#666", lineHeight: 1.6
            }}>
              Tell us your ingredients and get healthy recipes instantly.
            </Typography>
          </Box>

          {/* Ingredient badges */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {INGREDIENT_ICONS.map((item) => (
              <Box key={item.label} sx={{
                display: "flex", alignItems: "center", gap: "6px",
                px: "12px", py: "8px", borderRadius: "999px",
                background: "#F9FDF9", border: "1.5px solid #E8F5E9",
                cursor: "pointer", transition: "all 0.2s",
                "&:hover": { background: "#E8F5E9", borderColor: "#C8E6C9" }
              }}>
                <Box component="span" sx={{ fontSize: "18px", lineHeight: 1 }}>{item.icon}</Box>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "12px",
                  fontWeight: 600, color: "#1C1C1C"
                }}>{item.label}</Typography>
              </Box>
            ))}
            <Box sx={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 36, height: 36, borderRadius: "50%", background: "#F9FDF9",
              border: "1.5px dashed #C8E6C9", fontSize: "18px", cursor: "pointer",
              transition: "all 0.2s", "&:hover": { background: "#E8F5E9" }
            }}>
              +
            </Box>
          </Box>

          {/* CTA button */}
          <Button variant="contained" disableElevation
            endIcon={<Typography sx={{ fontSize: "18px" }}>→</Typography>}
            sx={{
              mt: "4px", height: 50, borderRadius: "999px",
              background: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
              color: "#fff", fontFamily: "'Poppins',sans-serif",
              fontSize: "15px", fontWeight: 700, textTransform: "none",
              boxShadow: "0 6px 20px rgba(46,125,50,.28)",
              "&:hover": { background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)" }
            }}>
            Generate with AI Chef
          </Button>
        </Box>

        {/* ═══ MIDDLE: Calorie Guide (circular gauge) ═══ */}
        <Box sx={{
          background: "#fff", borderRadius: "24px", border: "1.5px solid #E8F5E9",
          boxShadow: "0 6px 24px rgba(46,125,50,.09)",
          p: isMobile ? "24px 20px" : "28px 24px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"
        }}>

          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "15px",
            fontWeight: 700, color: "#1C1C1C", textAlign: "center"
          }}>
            Calorie Guide
          </Typography>

          {/* Gauge SVG — semicircle from 0 to 800+ */}
          <Box sx={{
            position: "relative", width: 180, height: 110, display: "flex",
            alignItems: "flex-end", justifyContent: "center"
          }}>
            <svg viewBox="0 0 200 120" width="200" height="120">
              {/* track arc */}
              <path d="M 20,100 A 80,80 0 0,1 180,100"
                fill="none" stroke="#E8F5E9" strokeWidth="18" strokeLinecap="round" />
              {/* gradient zones */}
              <defs>
                <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#66BB6A" />
                  <stop offset="50%" stopColor="#FDD835" />
                  <stop offset="100%" stopColor="#F4511E" />
                </linearGradient>
              </defs>
              <path d="M 20,100 A 80,80 0 0,1 180,100"
                fill="none" stroke="url(#gaugeGrad)" strokeWidth="14" strokeLinecap="round" />
              {/* needle pointing at 400 (middle) */}
              <line x1="100" y1="100" x2="100" y2="35"
                stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />
              <circle cx="100" cy="100" r="6" fill="#1C1C1C" />
            </svg>
            {/* labels */}
            <Box sx={{
              position: "absolute", bottom: 0, width: "100%",
              display: "flex", justifyContent: "space-between", px: "12px"
            }}>
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "11px",
                fontWeight: 600, color: "#66BB6A"
              }}>0</Typography>
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "11px",
                fontWeight: 600, color: "#FDD835"
              }}>400 kcal</Typography>
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "11px",
                fontWeight: 600, color: "#F4511E"
              }}>800+</Typography>
            </Box>
            {/* center value */}
            <Box sx={{
              position: "absolute", bottom: 18, left: "50%",
              transform: "translateX(-50%)", textAlign: "center"
            }}>
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "11px",
                fontWeight: 500, color: "#888", lineHeight: 1.2
              }}>Ideal Meal</Typography>
            </Box>
          </Box>

          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "12px",
            fontWeight: 400, color: "#888", textAlign: "center", lineHeight: 1.5, mt: "4px"
          }}>
            Stay in your zone, stay healthy!
          </Typography>
        </Box>

        {/* ═══ RIGHT: Newsletter card ═══ */}
        <Box sx={{
          background: "#fff", borderRadius: "24px", border: "1.5px solid #E8F5E9",
          boxShadow: "0 6px 24px rgba(46,125,50,.09)",
          p: isMobile ? "24px 20px" : "28px 24px",
          display: "flex", flexDirection: "column", gap: "14px", position: "relative", overflow: "hidden"
        }}>

          {/* floating leaf top-right */}
          <Box aria-hidden="true" sx={{
            position: "absolute", top: -15, right: -15,
            width: 100, height: 100, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,195,74,0.10) 0%, transparent 70%)"
          }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box sx={{ fontSize: "32px", lineHeight: 1 }}>🍃</Box>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: isMobile ? "17px" : "18px", fontWeight: 700,
              color: "#1C1C1C", lineHeight: 1.25
            }}>
              Get More Low Calorie<br />Recipes Delivered!
            </Typography>
          </Box>

          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "13px",
            fontWeight: 400, color: "#666", lineHeight: 1.6
          }}>
            Subscribe to our newsletter and never miss a healthy recipe update.
          </Typography>

          {/* Email input + button */}
          <Box sx={{ display: "flex", gap: "8px", mt: "6px" }}>
            <Box component="input" type="email" placeholder="Enter your email address"
              value={email} onChange={(e) => setEmail(e.target.value)}
              sx={{
                flex: 1, height: 44, px: "14px", borderRadius: "12px",
                border: "1.5px solid #E8F5E9", outline: "none",
                fontFamily: "'Poppins',sans-serif", fontSize: "13px",
                "&:focus": { borderColor: "#2E7D32" }
              }} />
          </Box>
          <Button variant="contained" disableElevation
            sx={{
              height: 48, borderRadius: "12px",
              background: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
              color: "#fff", fontFamily: "'Poppins',sans-serif",
              fontSize: "14px", fontWeight: 700, textTransform: "none",
              boxShadow: "0 4px 16px rgba(46,125,50,.24)",
              "&:hover": { background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)" }
            }}>
            Subscribe
          </Button>

          {/* salad bowl image bottom-right */}
          <Box component="img" loading="lazy"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=140&q=80&auto=format&fit=crop"
            alt="Salad bowl" sx={{
              position: "absolute", right: -20, bottom: -20,
              width: 110, height: 110, borderRadius: "50%", objectFit: "cover",
              boxShadow: "0 4px 16px rgba(0,0,0,.12)", opacity: 0.92
            }} />
        </Box>
      </Box>

      {/* ── Stats row (4 items, wraps on mobile) ── */}
      {/* <Box sx={{
        display: "flex", flexWrap: "wrap",
        justifyContent: isMobile ? "center" : "space-around",
        gap: isMobile ? "20px" : "32px", mt: isMobile ? "32px" : "40px",
        px: isMobile ? "0" : "60px"
      }}>
        {STATS.map((stat) => (
          <Box key={stat.label} sx={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: "6px", minWidth: isMobile ? "140px" : "auto"
          }}>
            <Box sx={{ fontSize: "32px", lineHeight: 1 }}>{stat.icon}</Box>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: isMobile ? "28px" : "32px", fontWeight: 800,
              color: "#2E7D32", lineHeight: 1
            }}>{stat.number}</Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: "12px", fontWeight: 500, color: "#888",
              textAlign: "center", lineHeight: 1.35, whiteSpace: "pre-line"
            }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box> */}

    </Box>
  );
}

/* ════════════════════════════════════════════════════════
   DiscoverByGoalSection — "Discover by Goal"
   ════════════════════════════════════════════════════════ */

const GOAL_CARDS = [
  {
    label: "Weight Loss",
    desc: "Burn calories\nshed pounds",
    bg: "#FFFDE7",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=220&q=80&auto=format&fit=crop",
  },
  {
    label: "Muscle Gain",
    desc: "High protein\ndelicious meals",
    bg: "#F1F8E9",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=220&q=80&auto=format&fit=crop",
  },
  {
    label: "Detox & Cleanse",
    desc: "Clean eating\nfor a fresh you",
    bg: "#FCE4EC",
    img: "https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?w=220&q=80&auto=format&fit=crop",
  },
  {
    label: "Energy Boost",
    desc: "Meals to keep you\nactive all day",
    bg: "#E3F2FD",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=220&q=80&auto=format&fit=crop",
  },
  {
    label: "Heart Health",
    desc: "Good for your heart\n& well-being",
    bg: "#EDE7F6",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=220&q=80&auto=format&fit=crop",
  },
];

function GoalCard({ card, isMobile }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        background: card.bg,
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: isMobile ? 160 : 200,
        position: "relative",
        cursor: "pointer",
        flex: isMobile ? "0 0 calc(50% - 8px)" : "1 1 0",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.13)"
          : "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      {/* Text area */}
      <Box sx={{ p: isMobile ? "14px 14px 0" : "18px 18px 0" }}>
        <Typography sx={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: isMobile ? "13px" : "14px",
          fontWeight: 700, color: "#1C1C1C", lineHeight: 1.25, mb: "6px",
        }}>
          {card.label}
        </Typography>
        <Typography sx={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: isMobile ? "11px" : "12px",
          fontWeight: 400, color: "#555", lineHeight: 1.5,
          whiteSpace: "pre-line",
        }}>
          {card.desc}
        </Typography>
      </Box>

      {/* Arrow button */}
      <Box sx={{
        px: isMobile ? "14px" : "18px", pb: isMobile ? "12px" : "14px", mt: "8px",
      }}>
        <Box sx={{
          width: 30, height: 30, borderRadius: "50%",
          background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          fontSize: "16px", fontWeight: 700, color: "#1C1C1C",
          transition: "background 0.2s, color 0.2s",
          ...(hovered && { background: "#2E7D32", color: "#fff" }),
        }}>
          →
        </Box>
      </Box>

      {/* Food image — bottom right */}
      <Box
        component="img"
        src={card.img}
        alt={card.label}
        loading="lazy"
        sx={{
          position: "absolute",
          right: isMobile ? -10 : -14,
          bottom: isMobile ? -8 : -12,
          width: isMobile ? 90 : 120,
          height: isMobile ? 90 : 120,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
          transition: "transform 0.22s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />
    </Box>
  );
}

function DiscoverByGoalSection({ isMobile }) {
  return (
    <Box
      component="section"
      aria-label="Discover by Goal"
      sx={{
        width: "100%",
        background: "#FFFFFF",
        borderTop: "1.5px solid #F0F0F0",
        boxSizing: "border-box",
        px: isMobile ? "16px" : "40px",
        py: isMobile ? "28px" : "40px",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: isMobile ? "20px" : "28px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "6px" }}>
          <Typography sx={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: 700, color: "#1C1C1C", lineHeight: 1.2,
          }}>
            Discover by Goal
          </Typography>
          <Box component="span" sx={{ fontSize: isMobile ? "18px" : "22px" }}>🌿</Box>
        </Box>
        <Typography sx={{
          fontFamily: "'Poppins',sans-serif",
          fontSize: isMobile ? "13px" : "14.5px",
          fontWeight: 400, color: "#666",
        }}>
          Choose your goal and we'll serve the perfect recipe!
        </Typography>
      </Box>

      {/* Cards row — wraps on mobile */}
      <Box sx={{
        display: "flex",
        flexWrap: isMobile ? "wrap" : "nowrap",
        gap: isMobile ? "12px" : "16px",
        width: "100%",
      }}>
        {GOAL_CARDS.map((card) => (
          <GoalCard key={card.label} card={card} isMobile={isMobile} />
        ))}
      </Box>
    </Box>
  );
}

/* ════════════════════════════════════════════════════════
   JourneySection — "Your Low Calorie Journey, Simplified"
   ════════════════════════════════════════════════════════ */

/* ── Top-picks data ── */
const TOP_PICKS = [
  {
    label: "High Protein",
    sub: "Muscle building meals",
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=80&q=80&auto=format&fit=crop",
  },
  {
    label: "Weight Loss",
    sub: "Fat burning recipes",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=80&q=80&auto=format&fit=crop",
  },
  {
    label: "Quick & Easy",
    sub: "Under 30 minutes",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=80&q=80&auto=format&fit=crop",
  },
  {
    label: "Meal Prep",
    sub: "Plan your meals",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=80&q=80&auto=format&fit=crop",
  },
];

/* ── Weekly bar chart: build 7 days with today highlighted ──
   Uses JS Date — no API needed, updates automatically every day.
   The week always shows Mon→Sun. Today's column is highlighted green.
── */
const DAY_NAMES_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// static activity heights per weekday (0=Sun … 6=Sat) — represents typical activity pattern
const ACTIVITY_BY_DOW = [40, 55, 48, 62, 50, 70, 35];

function buildWeekDays() {
  const today = new Date();
  const todayDow = today.getDay(); // 0=Sun,1=Mon…6=Sat
  // Build Mon(1)→Sun(0) week order
  const order = [1, 2, 3, 4, 5, 6, 0];
  return order.map((dow) => ({
    short: DAY_LABELS[dow].charAt(0),       // single letter for bar
    label: DAY_LABELS[dow],                 // 3-letter label
    full: DAY_NAMES_FULL[dow],             // full name
    isToday: dow === todayDow,
    barH: ACTIVITY_BY_DOW[dow],            // bar height %
  }));
}

/* ── Pie / donut chart SVG ── */
function MealPieChart() {
  /* segments: Veggies 40%, Protein 25%, Whole Grains 25%, Healthy Fats 10% */
  const segments = [
    { pct: 40, color: "#66BB6A", label: "Veggies", pos: "left" },
    { pct: 25, color: "#EF9A9A", label: "Protein", pos: "right" },
    { pct: 25, color: "#FFF176", label: "Whole Grains", pos: "left" },
    { pct: 10, color: "#80DEEA", label: "Healthy Fats", pos: "right" },
  ];

  const R = 70; const cx = 90; const cy = 90;
  let cumAngle = -90; // start at top

  const slices = segments.map((s) => {
    const startAngle = cumAngle;
    const sweep = (s.pct / 100) * 360;
    cumAngle += sweep;
    const start = polarToXY(cx, cy, R, startAngle);
    const end = polarToXY(cx, cy, R, cumAngle - 0.01);
    const large = sweep > 180 ? 1 : 0;
    return { ...s, d: `M${cx},${cy} L${start.x},${start.y} A${R},${R} 0 ${large},1 ${end.x},${end.y} Z` };
  });

  return (
    <svg viewBox="0 0 180 180" width="180" height="180" aria-label="Meal composition pie chart">
      {slices.map((s) => (
        <path key={s.label} d={s.d} fill={s.color} stroke="#fff" strokeWidth="2" />
      ))}
      {/* inner white circle for donut look */}
      <circle cx={cx} cy={cy} r={32} fill="#fff" />
      {/* food bowl image clipped inside inner circle */}
      <image
        href="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80&auto=format&fit=crop"
        x={cx - 28} y={cy - 28} width={56} height={56}
        clipPath="url(#innerCircle)"
        preserveAspectRatio="xMidYMid slice"
      />
      <defs>
        <clipPath id="innerCircle">
          <circle cx={cx} cy={cy} r={28} />
        </clipPath>
      </defs>
    </svg>
  );
}

function polarToXY(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ── Circular progress SVG (calorie goal) ── */
function CalorieRing({ current = 1200, goal = 2000 }) {
  const pct = current / goal;
  const R = 52; const CIRC = 2 * Math.PI * R;
  const dash = pct * CIRC;
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" aria-label={`${current} of ${goal} kcal consumed`}>
      {/* track */}
      <circle cx="60" cy="60" r={R} fill="none" stroke="#E8F5E9" strokeWidth="10" />
      {/* progress */}
      <circle cx="60" cy="60" r={R} fill="none" stroke="#2E7D32" strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${CIRC}`}
        strokeDashoffset={CIRC * 0.25}
        transform="rotate(-90 60 60)"
      />
      {/* centre text */}
      <text x="60" y="54" textAnchor="middle"
        style={{ fontFamily: "'Poppins',sans-serif", fontSize: "18px", fontWeight: 800, fill: "#1C1C1C" }}>
        {current}
      </text>
      <text x="60" y="71" textAnchor="middle"
        style={{ fontFamily: "'Poppins',sans-serif", fontSize: "10px", fontWeight: 500, fill: "#888" }}>
        / {goal} kcal
      </text>
    </svg>
  );
}

/* ── Main section ── */
function JourneySection({ isMobile }) {
  return (
    <Box component="section" aria-label="Your Low Calorie Journey"
      sx={{
        width: "100%", background: "#FAFAFA", borderTop: "1.5px solid #F0F0F0",
        fontFamily: "'Poppins',sans-serif", boxSizing: "border-box", py: isMobile ? 4 : 5
      }}>

      {/* ── Section heading ── */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", mb: isMobile ? 3 : 4 }}>
        {/* decorative dots left */}
        {!isMobile && (
          <Box aria-hidden="true" sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {[...Array(6)].map((_, i) => (
              <Box key={i} sx={{
                width: 5, height: 5, borderRadius: "50%",
                background: i < 3 ? "#A5D6A7" : "#C8E6C9", opacity: 0.7
              }} />
            ))}
          </Box>
        )}
        <Typography component="h2"
          sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: isMobile ? "20px" : "26px",
            fontWeight: 700, color: "#1C1C1C", textAlign: "center", lineHeight: 1.2
          }}>
          Your Low Calorie Journey, Simplified
        </Typography>
        <Box component="span" sx={{ fontSize: isMobile ? "18px" : "22px" }}>🌿</Box>
        {/* decorative dots right */}
        {!isMobile && (
          <Box aria-hidden="true" sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {[...Array(6)].map((_, i) => (
              <Box key={i} sx={{
                width: 5, height: 5, borderRadius: "50%",
                background: i > 2 ? "#A5D6A7" : "#C8E6C9", opacity: 0.7
              }} />
            ))}
          </Box>
        )}
      </Box>

      {/* ── 4-column grid (1-col on mobile) ── */}
      <Box sx={{
        width: "100%",
        px: isMobile ? "16px" : "32px",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
        gap: isMobile ? "16px" : "20px",
        alignItems: "start",
      }}>

        {/* ── CARD 1: Daily Calorie Goal ── */}
        <Box sx={{
          background: "#fff", borderRadius: "20px", border: "1.5px solid #E8F5E9",
          boxShadow: "0 4px 20px rgba(46,125,50,.07)", p: "20px 20px 16px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"
        }}>
          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "13px",
            fontWeight: 600, color: "#1C1C1C", textAlign: "center"
          }}>
            Daily Calorie Goal
          </Typography>
          <CalorieRing current={1200} goal={2000} />
          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "15px",
            fontWeight: 700, color: "#2E7D32", lineHeight: 1
          }}>
            600 kcal left
          </Typography>
          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "11.5px",
            fontWeight: 400, color: "#888", textAlign: "center"
          }}>
            Keep going! You're on track.
          </Typography>
        </Box>

        {/* ── CARD 2: Balanced Meal Plate ── */}
        <Box sx={{
          background: "#fff", borderRadius: "20px", border: "1.5px solid #E8F5E9",
          boxShadow: "0 4px 20px rgba(46,125,50,.07)", p: "20px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px"
        }}>
          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "13px",
            fontWeight: 600, color: "#1C1C1C"
          }}>
            Balanced Meal Plate
          </Typography>

          {/* Pie + legend */}
          <Box sx={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            width: "100%", gap: "12px", flexWrap: isMobile ? "wrap" : "nowrap"
          }}>

            {/* left legend */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: 80 }}>
              {[
                { color: "#66BB6A", pct: "40%", label: "Veggies" },
                { color: "#FFF176", pct: "25%", label: "Whole Grains" },
              ].map(l => (
                <Box key={l.label} sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: "2px", background: l.color, flexShrink: 0 }} />
                  <Typography sx={{
                    fontFamily: "'Poppins',sans-serif", fontSize: "11px",
                    fontWeight: 600, color: "#1C1C1C"
                  }}>{l.pct}</Typography>
                  <Typography sx={{
                    fontFamily: "'Poppins',sans-serif", fontSize: "10px",
                    color: "#888"
                  }}>{l.label}</Typography>
                </Box>
              ))}
            </Box>

            {/* pie chart */}
            <MealPieChart />

            {/* right legend */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: 90 }}>
              {[
                { color: "#EF9A9A", pct: "25%", label: "Protein" },
                { color: "#80DEEA", pct: "10%", label: "Healthy Fats" },
              ].map(l => (
                <Box key={l.label} sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: "2px", background: l.color, flexShrink: 0 }} />
                  <Typography sx={{
                    fontFamily: "'Poppins',sans-serif", fontSize: "11px",
                    fontWeight: 600, color: "#1C1C1C"
                  }}>{l.pct}</Typography>
                  <Typography sx={{
                    fontFamily: "'Poppins',sans-serif", fontSize: "10px",
                    color: "#888"
                  }}>{l.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── CARD 3: Weekly Progress ── */}
        <Box sx={{
          background: "#fff", borderRadius: "20px", border: "1.5px solid #E8F5E9",
          boxShadow: "0 4px 20px rgba(46,125,50,.07)", p: "20px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"
        }}>
          {/* Title row with live day name */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "13px",
              fontWeight: 600, color: "#1C1C1C"
            }}>
              Weekly Progress
            </Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "11px",
              fontWeight: 500, color: "#2E7D32"
            }}>
              Today is {DAY_NAMES_FULL[new Date().getDay()]}
            </Typography>
          </Box>

          {/* streak text */}
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "12px",
              fontWeight: 500, color: "#888"
            }}>Great job!</Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "11.5px",
              fontWeight: 400, color: "#888"
            }}>You've maintained a</Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "11.5px",
              fontWeight: 400, color: "#888"
            }}>healthy streak.</Typography>
          </Box>

          {/* streak badge — count = how many days into the Mon-Sun week today is */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
            <Typography sx={{ fontSize: "22px", lineHeight: 1 }}>🏆</Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "36px",
              fontWeight: 800, color: "#2E7D32", lineHeight: 1
            }}>
              {/* Mon=1…Sat=6, Sun=7 in Mon-first week */}
              {new Date().getDay() === 0 ? 7 : new Date().getDay()}
            </Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "12px",
              fontWeight: 600, color: "#1C1C1C"
            }}>Days</Typography>
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "11px",
              fontWeight: 400, color: "#888"
            }}>In a Row</Typography>
          </Box>

          {/* bar chart */}
          <Box sx={{
            display: "flex", alignItems: "flex-end", gap: "6px",
            height: 60, width: "100%", justifyContent: "center", mt: "4px"
          }}>
            {buildWeekDays().map((day, i) => (
              <Box key={i} sx={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "4px"
              }}>
                <Box sx={{
                  width: "18px",
                  height: `${day.barH}%`,
                  minHeight: "8px",
                  borderRadius: "4px 4px 0 0",
                  background: day.isToday ? "#2E7D32" : "#C8E6C9",
                }} />
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "10px",
                  fontWeight: day.isToday ? 700 : 500,
                  color: day.isToday ? "#2E7D32" : "#888"
                }}>{day.short}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── CARD 4: Top Picks ── */}
        <Box sx={{
          background: "#fff", borderRadius: "20px", border: "1.5px solid #E8F5E9",
          boxShadow: "0 4px 20px rgba(46,125,50,.07)", p: "16px 18px",
          display: "flex", flexDirection: "column", gap: "4px"
        }}>
          <Typography sx={{
            fontFamily: "'Poppins',sans-serif", fontSize: "13px",
            fontWeight: 600, color: "#1C1C1C", mb: "6px"
          }}>
            Top Picks for You
          </Typography>

          {TOP_PICKS.map((pick, i) => (
            <Box key={pick.label}
              sx={{
                display: "flex", alignItems: "center", gap: "10px",
                py: "8px",
                borderBottom: i < TOP_PICKS.length - 1 ? "1px solid #F5F5F5" : "none",
                cursor: "pointer",
                "&:hover .pick-arrow": { color: "#2E7D32" },
              }}>
              {/* thumbnail */}
              <Box component="img" src={pick.img} alt={pick.label} loading="lazy"
                sx={{ width: 40, height: 40, borderRadius: "10px", objectFit: "cover", flexShrink: 0 }} />
              {/* text */}
              <Box sx={{ flex: 1 }}>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "12.5px",
                  fontWeight: 700, color: "#1C1C1C", lineHeight: 1.2
                }}>{pick.label}</Typography>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "11px",
                  fontWeight: 400, color: "#888", lineHeight: 1.3
                }}>{pick.sub}</Typography>
              </Box>
              {/* chevron */}
              <Typography className="pick-arrow"
                sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "16px",
                  fontWeight: 700, color: "#C8E6C9", transition: "color 0.2s"
                }}>›</Typography>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}

/* ════════════════════════════════════════
   Main export
   ════════════════════════════════════════ */
export default function LowCalorie() {
  const [btnHover, setBtnHover] = useState(false);
  const navigate = useNavigate();

  /* ── responsive helpers via window width ── */
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const isTablet = w <= 1100;
  const isMobile = w <= 480;

  /* ── derived sizes ── */
  const headingSize = isMobile ? 40 : isTablet ? 48 : 68;
  const subBlackSize = isMobile ? 22 : isTablet ? 28 : 36;
  const subGreenSize = isMobile ? 28 : isTablet ? 34 : 42;
  const bowlSize = isMobile ? Math.min(w * 0.9, 340) : isTablet ? 380 : 480;


  /* ─────────────────────────────────────────
     MOBILE LAYOUT  (≤ 480px)
     Order: full-width image → heading overlay
            → all text content → benefits card
            → banner strip
     ───────────────────────────────────────── */
  if (isMobile) {
    return (
      <>
        <InjectStyles />

        {/* ── Back button ── */}
        <Box sx={{ position: "fixed", top: 74, left: 16, zIndex: 999 }}>
          <Box component="button" onClick={() => navigate(-1)}
            aria-label="Go back"
            sx={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              px: "14px", py: "8px", borderRadius: "999px",
              background: "#fff", border: "1.5px solid #E8F5E9",
              boxShadow: "0 2px 12px rgba(0,0,0,.12)",
              cursor: "pointer", outline: "none",
              fontFamily: "'Poppins',sans-serif", fontSize: "13px",
              fontWeight: 600, color: "#2E7D32",
              transition: "all 0.2s ease",
              "&:hover": {
                background: "#EAF7EA", borderColor: "#2E7D32",
                boxShadow: "0 4px 16px rgba(46,125,50,.20)"
              }
            }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 13, color: "#2E7D32" }} />
            Back
          </Box>
        </Box>

        <Box component="section" aria-label="Low Calorie Hero"
          sx={{
            width: "100%", background: "#fff", fontFamily: "'Poppins',sans-serif",
            position: "relative", overflow: "hidden", boxSizing: "border-box"
          }}>

          {/* ── Hero image block full-width ── */}
          <Box sx={{ position: "relative", width: "100%", height: 280, overflow: "hidden" }}>
            <Box component="img" src={BOWL} loading="eager"
              alt="Healthy low calorie food bowl"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

            {/* dark gradient at bottom so heading text is readable */}
            <Box aria-hidden="true" sx={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.52) 100%)"
            }} />

            {/* Kcal badge — top-right of image */}
            <Box aria-label="250 kcal per serving" sx={{
              position: "absolute", top: 14, right: 14,
              width: 80, height: 80, borderRadius: "50%",
              background: "#fff", border: "6px solid #EAF7EA",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 18px rgba(46,125,50,.22)",
              animation: "lcPulse 3s ease-in-out infinite", zIndex: 4
            }}>
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "20px",
                fontWeight: 800, color: "#2E7D32", lineHeight: 1
              }}>250</Typography>
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "8px",
                fontWeight: 600, color: "#666", lineHeight: 1.3, textAlign: "center"
              }}>KCAL</Typography>
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "8px",
                fontWeight: 600, color: "#666", lineHeight: 1.3, textAlign: "center"
              }}>PER SERVING</Typography>
            </Box>

            {/* "Low Calorie" heading overlaid on bottom of image */}
            <Box sx={{ position: "absolute", bottom: 16, left: 20, right: 20, zIndex: 3 }}>
              <Box component="h1" sx={{
                display: "flex", alignItems: "baseline",
                gap: "10px", margin: 0, flexWrap: "wrap"
              }}>
                <Typography component="span" sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 42, fontWeight: 800, color: "#6FCF3A",
                  lineHeight: 1, letterSpacing: "-1px",
                  textShadow: "0 2px 8px rgba(0,0,0,0.35)"
                }}>Low</Typography>
                <Typography component="span" sx={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 42, fontWeight: 800, color: "#fff",
                  lineHeight: 1, letterSpacing: "-1px",
                  textShadow: "0 2px 8px rgba(0,0,0,0.35)"
                }}>Calorie</Typography>
              </Box>
            </Box>
          </Box>

          {/* ── All content below image ── */}
          <Box sx={{
            px: "20px", pt: "24px", pb: "32px",
            display: "flex", flexDirection: "column", gap: "18px"
          }}>

            {/* Badge */}
            <Box sx={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              background: "#EAF7EA", border: "1.5px solid rgba(46,125,50,.2)",
              borderRadius: "30px", padding: "8px 16px", width: "fit-content"
            }}>
              <CheckCircleIcon sx={{ fontSize: 15, color: "#2E7D32" }} />
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "12px",
                fontWeight: 600, color: "#2E7D32", lineHeight: 1
              }}>
                Smart Choice for a Better You
              </Typography>
            </Box>

            {/* Sub heading */}
            <Box sx={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <Typography component="span" sx={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 24, fontWeight: 700, color: "#1C1C1C", lineHeight: 1.1
              }}>Delicious.</Typography>
              <Typography component="span" sx={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: 24, fontWeight: 700, color: "#1C1C1C", lineHeight: 1.1
              }}>Light.</Typography>
              <Typography component="span" sx={{
                fontFamily: "'Caveat',cursive",
                fontSize: 30, fontWeight: 700, color: "#2E7D32", lineHeight: 1.0
              }}>Nutritious.</Typography>
            </Box>

            {/* Description */}
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "14.5px",
              fontWeight: 400, color: "#666666", lineHeight: 1.8, margin: 0
            }}>
              Enjoy a wide range of low calorie recipes designed to help you eat
              healthy, stay fit, and feel amazing every day.
            </Typography>

            {/* Feature icons — 2 col grid */}
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px", width: "100%" }}>
              <FeatureItem icon={WaterDropOutlinedIcon} line1="Low in" line2="Calories" />
              <FeatureItem icon={FavoriteBorderIcon} line1="Nutrient" line2="Rich" />
              <FeatureItem icon={VerifiedUserOutlinedIcon} line1="Weight" line2="Friendly" />
              <FeatureItem icon={NatureOutlinedIcon} line1="100%" line2="Delicious" />
              <FeatureItem icon={RestaurantOutlinedIcon} line1="Chef" line2="Approved" />
            </Box>

            {/* CTA Button full width */}
            <Button variant="contained" disableElevation
              endIcon={<ArrowCircleRightOutlinedIcon />}
              aria-label="Explore Low Calorie Recipes"
              sx={{
                height: 56, width: "100%", borderRadius: "50px",
                background: "#2E7D32", color: "#fff", fontFamily: "'Poppins',sans-serif",
                fontSize: "15px", fontWeight: 600, textTransform: "none",
                boxShadow: "0 6px 24px rgba(46,125,50,.30)",
                "&:hover": { background: "#1B5E20" }
              }}>
              Explore Low Calorie Recipes
            </Button>

            {/* Happy users */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Box sx={{ display: "flex" }}>
                {AVATARS.map((src, i) => (
                  <Box key={i} component="img" src={src} alt={`Happy user ${i + 1}`} loading="lazy"
                    sx={{
                      width: 36, height: 36, borderRadius: "50%", border: "2.5px solid #fff",
                      objectFit: "cover", marginLeft: i === 0 ? 0 : "-10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,.14)"
                    }} />
                ))}
              </Box>
              <Box>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "14px",
                  fontWeight: 700, color: "#1C1C1C", lineHeight: 1.3
                }}>10K+ Happy Users</Typography>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "12px",
                  fontWeight: 400, color: "#666", lineHeight: 1.3
                }}>
                  Loving our healthy low calorie recipes
                </Typography>
              </Box>
            </Box>

            {/* Benefits card — full width below content */}
            <Box role="list" aria-label="Health benefits"
              sx={{
                background: "#fff", borderRadius: "20px", padding: "16px 18px",
                boxShadow: "0 6px 24px rgba(0,0,0,.09)",
                display: "flex", flexDirection: "column", gap: "12px",
                border: "1px solid #F0F0F0"
              }}>
              <BenefitRow icon={FavoriteIcon} label="Good for You" iconColor="#e05252" />
              <BenefitRow icon={LocalFireDepartmentOutlinedIcon} label="Burns Fat" iconColor="#f97316" />
              <BenefitRow icon={BoltOutlinedIcon} label="Boosts Energy" iconColor="#eab308" />
              <BenefitRow icon={FavoriteBorderIcon} label="Heart Healthy" iconColor="#2E7D32" />
              <BenefitRow icon={SpaOutlinedIcon} label="Better Digestion" iconColor="#2E7D32" />
            </Box>

          </Box>
        </Box>

        {/* Banner strip */}
        <BannerStrip isMobile={true} />
        {/* Journey section */}
        <JourneySection isMobile={true} />
        {/* Discover by Goal */}
        <DiscoverByGoalSection isMobile={true} />
        {/* AI Chef section */}
        <AIChefSection isMobile={true} />
      </>
    );
  }

  /* ─────────────────────────────────────────
     DESKTOP / TABLET LAYOUT  (> 480px) — unchanged
     ───────────────────────────────────────── */
  return (
    <>
      <Box component="section" aria-label="Low Calorie Hero" sx={S.section}>
        <InjectStyles />

        {/* ── Back button ── */}
        <Box sx={{ position: "absolute", top: 20, left: 24, zIndex: 10 }}>
          <Box component="button" onClick={() => navigate(-1)}
            aria-label="Go back"
            sx={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              px: "16px", py: "9px", borderRadius: "999px",
              background: "rgba(255,255,255,0.92)",
              border: "1.5px solid #E8F5E9",
              boxShadow: "0 2px 12px rgba(0,0,0,.10)",
              cursor: "pointer", outline: "none",
              fontFamily: "'Poppins',sans-serif", fontSize: "14px",
              fontWeight: 600, color: "#2E7D32",
              backdropFilter: "blur(6px)",
              transition: "all 0.2s ease",
              "&:hover": {
                background: "#EAF7EA", borderColor: "#2E7D32",
                boxShadow: "0 4px 18px rgba(46,125,50,.22)",
                transform: "translateX(-2px)"
              }
            }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 13, color: "#2E7D32" }} />
            Back
          </Box>
        </Box>

        {/* bg blobs */}
        <Box sx={S.blob1} aria-hidden="true" />
        <Box sx={S.blob2} aria-hidden="true" />

        {/* left background leaf */}
        <Leaf style={{
          position: "absolute", width: 40, top: "12%", left: "2%",
          animation: "lcFloat 5.5s ease-in-out 0.8s infinite"
        }} />
        <Leaf style={{
          position: "absolute", width: 35, bottom: "15%", left: "10%",
          animation: "lcFloat 6.5s ease-in-out 2s infinite"
        }} />

        {/* ── CONTAINER ── */}
        <Box sx={{
          ...S.container,
          flexDirection: isTablet ? "column" : "row",
          alignItems: "center",
          textAlign: isTablet ? "center" : "left",
          padding: isTablet ? "50px 40px" : "60px 80px",
          gap: isTablet ? 36 : 50,
          minHeight: isTablet ? "unset" : 700,
        }}>


          {/* ══════════ LEFT SIDE ══════════ */}
          <Box sx={{
            flex: "0 0 auto", width: isTablet ? "100%" : 480,
            maxWidth: isTablet ? 600 : "unset",
            display: "flex", flexDirection: "column",
            alignItems: isTablet ? "center" : "flex-start",
            gap: "22px",
            animation: "lcFadeUp 0.75s ease both"
          }}>

            {/* Badge */}
            <Box sx={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              background: "#EAF7EA", border: "1.5px solid rgba(46,125,50,.2)",
              borderRadius: "30px", padding: "8px 18px", width: "fit-content"
            }}>
              <CheckCircleIcon sx={{ fontSize: 16, color: "#2E7D32" }} />
              <Typography sx={{
                fontFamily: "'Poppins',sans-serif", fontSize: "13px",
                fontWeight: 600, color: "#2E7D32", lineHeight: 1
              }}>
                Smart Choice for a Better You
              </Typography>
            </Box>

            {/* Main heading */}
            <Box component="h1" sx={{
              display: "flex", alignItems: "baseline",
              gap: "16px", margin: 0, flexWrap: "wrap",
              justifyContent: isTablet ? "center" : "flex-start"
            }}>
              <Typography component="span" sx={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: headingSize, fontWeight: 800, color: "#2E7D32",
                lineHeight: 1, letterSpacing: "-1.5px"
              }}>Low</Typography>
              <Typography component="span" sx={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: headingSize, fontWeight: 800, color: "#1C1C1C",
                lineHeight: 1, letterSpacing: "-1.5px"
              }}>Calorie</Typography>
            </Box>

            {/* Sub heading */}
            <Box sx={{
              display: "flex", alignItems: "baseline", gap: "10px",
              flexWrap: "wrap", justifyContent: isTablet ? "center" : "flex-start"
            }}>
              <Typography component="span" sx={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: subBlackSize, fontWeight: 700, color: "#1C1C1C", lineHeight: 1.1
              }}>
                Delicious.
              </Typography>
              <Typography component="span" sx={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: subBlackSize, fontWeight: 700, color: "#1C1C1C", lineHeight: 1.1
              }}>
                Light.
              </Typography>
              <Typography component="span" sx={{
                fontFamily: "'Caveat',cursive",
                fontSize: subGreenSize, fontWeight: 700, color: "#2E7D32", lineHeight: 1.0
              }}>
                Nutritious.
              </Typography>
            </Box>


            {/* Description */}
            <Typography sx={{
              fontFamily: "'Poppins',sans-serif", fontSize: "18px",
              fontWeight: 400, color: "#666666", lineHeight: 1.8,
              maxWidth: 480, margin: 0
            }}>
              Enjoy a wide range of low calorie recipes designed to help you eat
              healthy, stay fit, and feel amazing every day.
            </Typography>

            {/* Feature icons */}
            <Box sx={{
              display: "flex", flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 0, width: "100%"
            }}>
              <FeatureItem icon={WaterDropOutlinedIcon} line1="Low in" line2="Calories" />
              <FeatureItem icon={FavoriteBorderIcon} line1="Nutrient" line2="Rich" />
              <FeatureItem icon={VerifiedUserOutlinedIcon} line1="Weight" line2="Friendly" />
              <FeatureItem icon={NatureOutlinedIcon} line1="100%" line2="Delicious" />
              <FeatureItem icon={RestaurantOutlinedIcon} line1="Chef" line2="Approved" />
            </Box>

            {/* CTA Button */}
            <Button variant="contained" disableElevation
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              endIcon={<ArrowCircleRightOutlinedIcon />}
              aria-label="Explore Low Calorie Recipes"
              sx={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                gap: "10px", height: 60, width: 320,
                borderRadius: "50px", background: btnHover ? "#1B5E20" : "#2E7D32",
                color: "#fff", fontFamily: "'Poppins',sans-serif",
                fontSize: "17px", fontWeight: 600,
                textTransform: "none", letterSpacing: "0.01em",
                boxShadow: btnHover
                  ? "0 10px 30px rgba(46,125,50,.40)"
                  : "0 6px 24px rgba(46,125,50,.30)",
                transform: btnHover ? "scale(1.03)" : "scale(1)",
                transition: "all 0.22s ease", border: "none"
              }}>
              Explore Low Calorie Recipes
            </Button>


            {/* Happy users */}
            <Box sx={{
              display: "flex", alignItems: "center", gap: "14px",
              justifyContent: isTablet ? "center" : "flex-start"
            }}>
              <Box sx={{ display: "flex" }}>
                {AVATARS.map((src, i) => (
                  <Box key={i} component="img" src={src} alt={`Happy user ${i + 1}`}
                    loading="lazy"
                    sx={{
                      width: 38, height: 38, borderRadius: "50%",
                      border: "2.5px solid #fff", objectFit: "cover",
                      marginLeft: i === 0 ? 0 : "-10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,.14)"
                    }} />
                ))}
              </Box>
              <Box>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "14.5px",
                  fontWeight: 700, color: "#1C1C1C", lineHeight: 1.3
                }}>
                  10K+ Happy Users
                </Typography>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "12.5px",
                  fontWeight: 400, color: "#666", lineHeight: 1.3
                }}>
                  Loving our healthy low calorie recipes
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* ══════════ END LEFT ══════════ */}


          {/* ══════════ RIGHT SIDE ══════════ */}
          <Box sx={{
            flex: 1, position: "relative", display: "flex",
            flexDirection: isTablet ? "column" : "row",
            alignItems: "center", justifyContent: "center",
            minHeight: isTablet ? "unset" : 560,
            animation: "lcFadeLeft 0.75s ease 0.15s both"
          }}>

            {/* Dashed decorative ring */}
            <Box aria-hidden="true" sx={{
              position: "absolute",
              width: bowlSize + 40, height: bowlSize + 40,
              borderRadius: "50%", border: "2px dashed rgba(46,125,50,.12)",
              top: "50%", left: "50%",
              transform: isTablet ? "translate(-50%,-60%)" : "translate(-60%,-50%)",
              pointerEvents: "none", zIndex: 1
            }} />

            {/* Bowl wrapper */}
            <Box sx={{ position: "relative", width: bowlSize, height: bowlSize, flexShrink: 0 }}>

              {/* Kcal badge */}
              <Box aria-label="250 kcal per serving"
                sx={{
                  position: "absolute", top: -20, left: "50%",
                  transform: "translateX(-50%)",
                  width: 110, height: 110, borderRadius: "50%",
                  background: "#fff", border: "8px solid #EAF7EA",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  boxShadow: "0 6px 24px rgba(46,125,50,.18)",
                  animation: "lcPulse 3s ease-in-out infinite", zIndex: 4
                }}>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "30px",
                  fontWeight: 800, color: "#2E7D32", lineHeight: 1
                }}>250</Typography>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "10px",
                  fontWeight: 600, color: "#666", letterSpacing: "0.04em",
                  lineHeight: 1.3, textAlign: "center"
                }}>KCAL</Typography>
                <Typography sx={{
                  fontFamily: "'Poppins',sans-serif", fontSize: "10px",
                  fontWeight: 600, color: "#666", letterSpacing: "0.04em",
                  lineHeight: 1.3, textAlign: "center"
                }}>PER SERVING</Typography>
              </Box>

              {/* Bowl image */}
              <Box component="img" src={BOWL} loading="eager"
                alt="Healthy low calorie bowl with chicken, avocado, tomatoes, broccoli and quinoa"
                sx={{
                  width: "100%", height: "100%", objectFit: "cover",
                  borderRadius: "50%", display: "block",
                  boxShadow: "0 30px 80px rgba(0,0,0,.18), 0 10px 30px rgba(0,0,0,.10)"
                }} />

              {/* Benefits card */}
              <Box role="list" aria-label="Health benefits"
                sx={{
                  position: isTablet ? "static" : "absolute",
                  right: isTablet ? undefined : -10,
                  top: isTablet ? undefined : "50%",
                  transform: isTablet ? "none" : "translateY(-50%)",
                  marginTop: isTablet ? "18px" : undefined,
                  background: "#fff", borderRadius: "24px",
                  padding: "18px 22px",
                  boxShadow: "0 8px 32px rgba(0,0,0,.10)",
                  display: "flex", flexDirection: "column", gap: "13px",
                  minWidth: 170, animation: "lcFadeIn 0.8s ease 0.4s both", zIndex: 5
                }}>
                <BenefitRow icon={FavoriteIcon} label="Good for You" iconColor="#e05252" />
                <BenefitRow icon={LocalFireDepartmentOutlinedIcon} label="Burns Fat" iconColor="#f97316" />
                <BenefitRow icon={BoltOutlinedIcon} label="Boosts Energy" iconColor="#eab308" />
                <BenefitRow icon={FavoriteBorderIcon} label="Heart Healthy" iconColor="#2E7D32" />
                <BenefitRow icon={SpaOutlinedIcon} label="Better Digestion" iconColor="#2E7D32" />
              </Box>
            </Box>


            {/* Floating leaves */}
            <Leaf style={{
              position: "absolute", width: 70, top: "5%", right: "2%",
              animation: "lcFloat 6s ease-in-out 0s infinite"
            }} />
            <Leaf style={{
              position: "absolute", width: 50, top: "18%", right: "14%",
              animation: "lcFloat 5s ease-in-out 1s infinite"
            }} />
            <Leaf style={{
              position: "absolute", width: 55, bottom: "8%", right: "5%",
              animation: "lcFloat 7s ease-in-out 1.5s infinite"
            }} />

            {/* Eat light / Live bright tagline */}
            <Box aria-label="Eat light, Live bright"
              sx={{
                position: isTablet ? "static" : "absolute",
                bottom: isTablet ? undefined : 40,
                right: isTablet ? undefined : 30,
                textAlign: isTablet ? "center" : "right",
                marginTop: isTablet ? "12px" : undefined,
                lineHeight: 1.25
              }}>
              <Typography component="span" sx={{
                fontFamily: "'Caveat',cursive",
                fontSize: isMobile ? "22px" : "28px", fontWeight: 700,
                color: "#2E7D32", lineHeight: 1.25, display: "block"
              }}>
                Eat light
              </Typography>
              <Typography component="span" sx={{
                fontFamily: "'Caveat',cursive",
                fontSize: isMobile ? "22px" : "28px", fontWeight: 700,
                color: "#2E7D32", lineHeight: 1.25, display: "block"
              }}>
                Live bright ♡
              </Typography>
            </Box>

          </Box>
          {/* ══════════ END RIGHT ══════════ */}

        </Box>
      </Box>

      {/* ══════════ BANNER STRIP ══════════ */}
      <BannerStrip isMobile={isMobile} />

      {/* ══════════ JOURNEY SECTION ══════════ */}
      <JourneySection isMobile={isMobile} />

      {/* ══════════ DISCOVER BY GOAL ══════════ */}
      <DiscoverByGoalSection isMobile={isMobile} />

      {/* ══════════ AI CHEF SECTION ══════════ */}
      <AIChefSection isMobile={isMobile} />

    </>
  );
}
