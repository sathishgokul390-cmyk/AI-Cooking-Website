import React, { useState } from "react";
import { Box, Typography, Button, Grid, Container, Modal, Backdrop, Fade, Avatar } from "@mui/material";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";

/* ── Advanced 3D Parallax & Smooth Micro-Interaction Animations ── */
const CUSTOM_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700;800&display=swap');

@keyframes floatLeaf {
  0%, 100% { transform: translateY(0) rotate(-5deg) scale(1); }
  50% { transform: translateY(-10px) rotate(6deg) scale(1.05); }
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulseGold {
  0% { box-shadow: 0 0 0 0 rgba(180, 83, 9, 0.3); }
  70% { box-shadow: 0 0 0 15px rgba(180, 83, 9, 0); }
  100% { box-shadow: 0 0 0 0 rgba(180, 83, 9, 0); }
}

@keyframes subtleFloatDish {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
`;

const COLORS = {
  bg: "#F9F7F4",
  cardBg: "#FFFFFF",
  goldDark: "#B45309",
  goldPrimary: "#D97706",
  goldLight: "#FEF3C7",
  goldGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B7280",
  borderLight: "rgba(217, 119, 6, 0.25)",
};

const FOOD_IMG = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&q=90&auto=format&fit=crop";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
];

const FEATURES = [
  { Icon: FitnessCenterOutlinedIcon, l1: "Builds", l2: "Muscle" },
  { Icon: CameraAltOutlinedIcon, l1: "Supports", l2: "Weight Loss" },
  { Icon: WhatshotOutlinedIcon, l1: "Boosts", l2: "Metabolism" },
  { Icon: TimerOutlinedIcon, l1: "Keeps You", l2: "Full Longer" },
  { Icon: ShieldOutlinedIcon, l1: "Improves", l2: "Immunity" },
];

const WHY_BENEFITS = [
  { Icon: FitnessCenterOutlinedIcon, text: "Builds & Repairs Muscle" },
  { Icon: CameraAltOutlinedIcon, text: "Supports Weight Loss" },
  { Icon: WhatshotOutlinedIcon, text: "Enhances Metabolism" },
  { Icon: ShieldOutlinedIcon, text: "Stronger Immunity" },
  { Icon: TimerOutlinedIcon, text: "Keeps You Fuller Longer" },
];

const THEME_COLORS = {
  bg: "#F9F7F4",
  cardActive: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  cardInactive: "#FFFFFF",
  goldDark: "#B45309",
  goldLight: "#FEF3C7",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B7280",
  borderLight: "rgba(217, 119, 6, 0.15)",
};

const CATEGORIES = [
  { id: "all", label: "All Recipes", count: "120+ Recipes", type: "icon", icon: <GridViewRoundedIcon sx={{ fontSize: 20 }} /> },
  { id: "chicken", label: "Chicken", count: "45+ Recipes", type: "emoji", emoji: "🍗" },
  { id: "vegetarian", label: "Vegetarian", count: "30+ Recipes", type: "emoji", emoji: "🌿" },
  { id: "egg", label: "Egg & Dairy", count: "20+ Recipes", type: "emoji", emoji: "🍳" },
  { id: "seafood", label: "Seafood", count: "15+ Recipes", type: "icon", icon: <SetMealOutlinedIcon sx={{ fontSize: 20 }} /> },
  { id: "beef", label: "Beef", count: "10+ Recipes", type: "emoji", emoji: "🥩" },
];

function RecipeCategoryFilter() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Box sx={{
      width: "100%", backgroundColor: "#FFFFFF",
      borderRadius: "24px", border: `1.5px solid ${THEME_COLORS.borderLight}`,
      p: { xs: 1.5, sm: 2 }, boxShadow: "0 8px 24px rgba(217, 119, 6, 0.04)",
      position: "relative", overflow: "hidden"
    }}>
      {/* Scroll Edge Fades for Mobile Devices */}
      <Box aria-hidden="true" sx={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 20,
        background: "linear-gradient(to right, #FFFFFF, transparent)", zIndex: 3, pointerEvents: "none", display: { xs: "block", md: "none" }
      }} />
      <Box aria-hidden="true" sx={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 20,
        background: "linear-gradient(to left, #FFFFFF, transparent)", zIndex: 3, pointerEvents: "none", display: { xs: "block", md: "none" }
      }} />

      {/* Swipeable Categories Row container */}
      <Box sx={{
        display: "flex", gap: { xs: 1.5, sm: 2 }, overflowX: "auto", scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" }, py: 0.5, px: { xs: 1, sm: 0 },
        justifyContent: { xs: "flex-start", md: "space-between" }, alignItems: "center"
      }}>
        {CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;

          return (
            <Box
              key={cat.id} role="button" tabIndex={0} onClick={() => setActiveTab(cat.id)}
              sx={{
                flex: { xs: "0 0 auto", md: 1 }, minWidth: { xs: "165px", sm: "180px", md: "0px" }, maxWidth: { md: "200px" },
                display: "flex", alignItems: "center", gap: 1.75, p: "12px 16px", borderRadius: "18px", cursor: "pointer",
                background: isActive ? THEME_COLORS.cardActive : THEME_COLORS.cardInactive,
                border: isActive ? "1px solid transparent" : `1px solid rgba(0,0,0,0.06)`,
                boxShadow: isActive ? "0 10px 20px rgba(217, 119, 6, 0.2)" : "0 2px 6px rgba(0,0,0,0.02)",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: isActive ? "0 12px 24px rgba(217, 119, 6, 0.25)" : "0 6px 14px rgba(217, 119, 6, 0.08)",
                  borderColor: isActive ? "transparent" : "rgba(217, 119, 6, 0.3)"
                }
              }}
            >
              <Avatar sx={{
                width: 42, height: 42, fontSize: "18px",
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.2)" : THEME_COLORS.bg,
                border: isActive ? "none" : `1px solid ${THEME_COLORS.borderLight}`,
                color: isActive ? "#FFFFFF" : THEME_COLORS.goldDark,
              }}>
                {cat.type === "icon" ? cat.icon : cat.emoji}
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                <Typography noWrap sx={{
                  fontFamily: "'Poppins', sans-serif", fontSize: "13.5px", fontWeight: 700,
                  color: isActive ? "#FFFFFF" : THEME_COLORS.textPrimary, lineHeight: 1.2
                }}>
                  {cat.label}
                </Typography>
                <Typography noWrap sx={{
                  fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500,
                  color: isActive ? "rgba(255, 255, 255, 0.8)" : THEME_COLORS.textSecondary, mt: 0.25
                }}>
                  {cat.count}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default function HighProtein() {
  // Modal State and Context Configuration Setup
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalData, setActiveModalData] = useState({
    title: "",
    percentage: "0%",
    dashArray: "0 100",
    metric1Label: "",
    metric1Value: "",
    metric2Label: "",
    metric2Value: "",
    proteinTag: ""
  });

  // Dynamic content injector per functional leaf target
  const triggerModalContent = (leafType) => {
    if (leafType === "bottom-left") {
      setActiveModalData({
        title: "Metabolic Efficiency",
        percentage: "30%",
        dashArray: "30 70",
        metric1Label: "Thermic Effect",
        metric1Value: "+30% Burn",
        metric2Label: "Satiety Index",
        metric2Value: "4.2x Longer",
        proteinTag: "35g Clean Protein"
      });
    } else {
      setActiveModalData({
        title: "Cellular & Muscle Repair",
        percentage: "85%",
        dashArray: "85 15",
        metric1Label: "MPS Activation",
        metric1Value: "Optimal mTOR",
        metric2Label: "Recovery Window",
        metric2Value: "-40% Fatigue",
        proteinTag: "High Amino Density"
      });
    }
    setModalOpen(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CUSTOM_STYLES }} />

      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundColor: COLORS.bg,
          color: COLORS.textPrimary,
          fontFamily: "'Poppins', sans-serif",
          position: "relative",
          overflow: "hidden",
          py: { xs: 4, sm: 6, md: 10, lg: 12 },
          px: { xs: 1.5, sm: 3, md: 4 }
        }}
      >
        {/* Decorative Global Ambience Leaf */}
        <Box aria-hidden="true" sx={{
          position: "absolute", bottom: "5%", right: "4%",
          fontSize: { xs: "2rem", md: "4rem" },
          animation: "floatLeaf 6s ease-in-out infinite",
          zIndex: 4, opacity: 0.95, pointerEvents: "none",
          filter: "drop-shadow(0 15px 12px rgba(0,0,0,0.15))"
        }}>🌿</Box>

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, sm: 5, md: 3, lg: 5 }} alignItems="center">

            {/* ═══ COLUMN 2 (IMAGE) — MOVED TO TOP ON MOBILE ═══ */}
            <Grid item xs={12} md={4} lg={4} sx={{ display: "flex", justifyContent: "center", order: { xs: 1, md: 2 } }}>
              <Box sx={{
                position: "relative",
                width: { xs: "260px", sm: "340px", md: "100%" },
                maxHeight: { md: "440px" },
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: { xs: 2, md: 0 }
              }}>

                {/* Elegant Abstract Dashed Sunburst Ring */}
                <Box aria-hidden="true" sx={{
                  position: "absolute", width: "112%", height: "112%",
                  borderRadius: "50%", border: `2px dashed ${COLORS.borderLight}`,
                  opacity: 0.6, animation: "spinSlow 28s linear infinite", pointerEvents: "none"
                }} />

                {/* Soft Radiant Light Glow Background */}
                <Box aria-hidden="true" sx={{
                  position: "absolute", width: "90%", height: "90%", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(254, 243, 199, 0.6) 0%, transparent 70%)",
                  filter: "blur(10px)", zIndex: 1, pointerEvents: "none"
                }} />

                {/* Interactive Floating Mask Frame */}
                <Box sx={{
                  position: "relative", width: "95%", height: "95%", borderRadius: "50%", zIndex: 2,
                  animation: "subtleFloatDish 5s ease-in-out infinite",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                  "&:hover": {
                    transform: "scale(1.03) translateY(-4px)",
                    "& .hero-food-plate": { boxShadow: "0 35px 70px rgba(180, 83, 9, 0.25)" }
                  }
                }}>

                  {/* Floating Serving Protein Quantity Badge */}
                  <Box sx={{
                    position: "absolute", top: "4%", left: "-2%",
                    width: { xs: 68, sm: 84, lg: 96 }, height: { xs: 68, sm: 84, lg: 96 },
                    borderRadius: "50%", border: `2px solid ${COLORS.cardBg}`, background: COLORS.goldGradient,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    zIndex: 4, boxShadow: "0 10px 25px rgba(217, 119, 6, 0.4)", animation: "pulseGold 3.5s infinite"
                  }}>
                    <Typography sx={{ fontSize: { xs: "18px", sm: "24px", lg: "28px" }, fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>
                      35g
                    </Typography>
                    <Typography sx={{ fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.9)", textAlign: "center", letterSpacing: "0.05em", mt: 0.5 }}>
                      PROTEIN<br />PER SERVING
                    </Typography>
                  </Box>

                  {/* High Quality Gourmet Plate Mask */}
                  <Box
                    component="img"
                    src={FOOD_IMG}
                    className="hero-food-plate"
                    alt="High protein signature culinary creation"
                    sx={{
                      width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block",
                      border: `5px solid ${COLORS.cardBg}`, transition: "all 0.4s ease",
                      boxShadow: "0 20px 50px rgba(180, 83, 9, 0.14)"
                    }}
                  />

                  {/* ── INTERACTIVE LEAF 1: Content Module A (Bottom Left Element) ── */}
                  <Box
                    role="button"
                    onClick={() => triggerModalContent("bottom-left")}
                    sx={{
                      position: "absolute", bottom: "6%", left: "2%",
                      fontSize: { xs: "1.5rem", sm: "2.2rem" }, transform: "rotate(40deg)",
                      zIndex: 4, filter: "drop-shadow(2px 5px 4px rgba(0,0,0,0.18))", cursor: "pointer",
                      transition: "transform 0.2s", "&:hover": { transform: "rotate(45deg) scale(1.2)" }
                    }}
                  >
                    🍃
                  </Box>

                  {/* ── INTERACTIVE LEAF 2: Content Module B (Top Right Element) ── */}
                  <Box
                    role="button"
                    onClick={() => triggerModalContent("top-right")}
                    sx={{
                      position: "absolute", top: "12%", right: "0%",
                      fontSize: { xs: "1.3rem", sm: "1.8rem" }, transform: "rotate(-25deg)",
                      zIndex: 4, filter: "drop-shadow(-2px 4px 4px rgba(0,0,0,0.15))", cursor: "pointer",
                      transition: "transform 0.2s", "&:hover": { transform: "rotate(-20deg) scale(1.2)" }
                    }}
                  >
                    🍃
                  </Box>

                </Box>
              </Box>
            </Grid>

            {/* ═══ COLUMN 1: Heading Content & Micro Features ═══ */}
            <Grid item xs={12} md={5.5} lg={5.5} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 3 } }}>

                {/* Top Badge */}
                <Box sx={{
                  display: "inline-flex", alignItems: "center", gap: 1.5,
                  px: 2, py: 0.75, borderRadius: "999px",
                  border: `1.5px solid ${COLORS.borderLight}`, backgroundColor: COLORS.goldLight,
                  width: "fit-content", mt: { xs: 1, md: 0 }
                }}>
                  <Typography sx={{
                    fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 700, color: COLORS.goldDark,
                    letterSpacing: "0.15em", textTransform: "uppercase"
                  }}>
                    Stronger Everyday
                  </Typography>
                  <FitnessCenterOutlinedIcon sx={{ fontSize: 14, color: COLORS.goldDark }} />
                </Box>

                {/* Typography Header */}
                <Box>
                  <Typography variant="h1" sx={{
                    fontFamily: "'Playfair Display', serif", fontWeight: 700,
                    fontSize: { xs: "2rem", sm: "3rem", md: "3.4rem", lg: "4.5rem" },
                    lineHeight: { xs: 1.2, sm: 1.1 }, letterSpacing: "-0.01em", color: COLORS.textPrimary, mb: 1
                  }}>
                    High <Box component="span" sx={{ color: COLORS.goldPrimary, fontFamily: "inherit", fontWeight: "inherit" }}>Protein</Box>
                    <br />
                    For a Stronger You
                  </Typography>
                </Box>

                {/* Subdescriptions */}
                <Box sx={{ maxWidth: 480 }}>
                  <Typography sx={{ fontSize: { xs: "14px", sm: "17px" }, fontWeight: 600, mb: 1, color: COLORS.textPrimary }}>
                    Fuel your body. Build strength. Live better.
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "12.5px", sm: "14px" }, color: COLORS.textSecondary, lineHeight: 1.6 }}>
                    Delicious high protein recipes to build muscle, boost energy and support a healthy lifestyle.
                  </Typography>
                </Box>

                {/* Inline Horizon Horizontal Icons Rows */}
                <Box sx={{
                  display: "flex", gap: { xs: 1, sm: 2, md: 1.5, lg: 2.5 }, mt: 1, flexWrap: { xs: "wrap", sm: "nowrap" }
                }}>
                  {FEATURES.map(({ Icon, l1, l2 }, index) => (
                    <Box key={index} sx={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 0.75,
                      minWidth: { xs: "calc(33.33% - 8px)", sm: "auto" }
                    }}>
                      <Box sx={{
                        width: { xs: 42, sm: 48 }, height: { xs: 42, sm: 48 }, borderRadius: "50%",
                        border: `1px solid ${COLORS.borderLight}`, display: "flex", alignItems: "center",
                        backgroundColor: COLORS.cardBg, justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.03)"
                      }}>
                        <Icon sx={{ fontSize: { xs: 18, sm: 20 }, color: COLORS.goldPrimary }} />
                      </Box>
                      <Typography sx={{
                        fontSize: { xs: "10px", sm: "11px" }, fontWeight: 600, color: COLORS.textPrimary,
                        textAlign: "center", lineHeight: 1.3
                      }}>
                        {l1}<br />{l2}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Actions Buttons & Social Proof Container */}
                <Box sx={{
                  display: "flex", gap: { xs: 2.5, sm: 3 }, mt: 2,
                  flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "stretch", sm: "center" }
                }}>
                  <Button
                    variant="contained"
                    disableElevation
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      height: 52, borderRadius: "999px", background: COLORS.goldGradient, color: "#FFFFFF",
                      fontFamily: "'Poppins', sans-serif", fontSize: "13.5px", fontWeight: 700,
                      textTransform: "none", px: 4, boxShadow: "0 6px 20px rgba(217, 119, 6, 0.3)",
                      "&:hover": { background: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)" }
                    }}
                  >
                    Explore High Protein Recipes
                  </Button>

                  {/* Users Social Proof Capsule */}
                  <Box sx={{
                    display: "inline-flex", alignItems: "center", gap: 1.5, px: 2, py: 1, borderRadius: "999px",
                    border: `1px solid ${COLORS.borderLight}`, backgroundColor: COLORS.cardBg,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)", alignSelf: { xs: "center", sm: "auto" }
                  }}>
                    <Box sx={{ display: "flex", mr: 0.5 }}>
                      {AVATARS.map((src, idx) => (
                        <Box key={idx} component="img" src={src} alt="user avatar"
                          sx={{
                            width: 28, height: 28, borderRadius: "50%",
                            border: `2px solid ${COLORS.cardBg}`, ml: idx === 0 ? 0 : "-8px", objectFit: "cover"
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontSize: "11px", fontWeight: 700, color: COLORS.textPrimary, lineHeight: 1.2 }}>
                        12K+ Happy Users
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <StarIcon sx={{ fontSize: 11, color: COLORS.goldPrimary }} />
                        <Typography sx={{ fontSize: "10.5px", color: COLORS.textSecondary, fontWeight: 500 }}>
                          4.9 (2.3K Reviews)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

              </Box>
            </Grid>

            {/* ═══ COLUMN 3: Right Sidebar Benefit Card ═══ */}
            <Grid item xs={12} md={2.5} lg={2.5} sx={{ order: 3 }}>
              <Box sx={{
                backgroundColor: COLORS.cardBg, borderRadius: "24px", border: `1.5px solid ${COLORS.borderLight}`,
                p: { xs: 3, sm: 4, md: 2, lg: 3 }, boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                display: "flex", flexDirection: "column", gap: 2.5, mt: { xs: 1, md: 0 }
              }}>
                <Typography sx={{
                  fontFamily: "'Playfair Display', serif", fontSize: { xs: "18px", md: "15px", lg: "19px" },
                  fontWeight: 700, color: COLORS.textPrimary
                }}>
                  Why High Protein?
                </Typography>

                {/* Vertical Row Benefit Metric Sets */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {WHY_BENEFITS.map(({ Icon, text }, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box sx={{
                        width: 32, height: 32, borderRadius: "50%", border: `1px solid ${COLORS.borderLight}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, backgroundColor: COLORS.goldLight
                      }}>
                        <Icon sx={{ fontSize: 15, color: COLORS.goldDark }} />
                      </Box>
                      <Typography sx={{ fontSize: { xs: "13px", md: "11px", lg: "13px" }, fontWeight: 600, color: COLORS.textPrimary }}>
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Expand Component Action Trigger */}
                <Box
                  role="button"
                  tabIndex={0}
                  aria-label="See more benefits"
                  sx={{
                    width: 32, height: 32, borderRadius: "50%", border: `1px solid ${COLORS.borderLight}`,
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", mt: 0.5,
                    backgroundColor: COLORS.goldLight, transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: COLORS.goldPrimary, borderColor: COLORS.goldPrimary, "& svg": { color: "#FFFFFF" }
                    }
                  }}
                >
                  <AddIcon sx={{ fontSize: 16, color: COLORS.goldDark }} />
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>

        {/* ── RECIPE CATEGORY FILTER ── */}
        <Box sx={{ width: "100%", px: { xs: 1.5, sm: 3, md: 4 }, mt: { xs: 4, sm: 5, md: 6 } }}>
          <RecipeCategoryFilter />
        </Box>

        {/* ── HIGH PREFORMANCE INTERACTIVE DASHBOARD MODAL ── */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 400,
              sx: { backgroundColor: "rgba(26, 26, 26, 0.4)", backdropFilter: "blur(6px)" }
            },
          }}
        >
          <Fade in={modalOpen}>
            <Box sx={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "460px" },
              backgroundColor: COLORS.cardBg,
              borderRadius: "28px",
              border: `1.5px solid ${COLORS.borderLight}`,
              boxShadow: "0 24px 64px rgba(180, 83, 9, 0.16)",
              p: { xs: 3, sm: 4 },
              outline: "none",
              fontFamily: "'Poppins', sans-serif"
            }}>

              {/* Layout Close and Main Header Segment */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EqualizerIcon sx={{ color: COLORS.goldPrimary }} />
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: COLORS.textPrimary }}>
                    {activeModalData.title}
                  </Typography>
                </Box>
                <Box
                  role="button"
                  onClick={() => setModalOpen(false)}
                  sx={{
                    cursor: "pointer", display: "flex", p: 0.5, borderRadius: "50%",
                    backgroundColor: COLORS.bg, border: `1px solid ${COLORS.borderLight}`,
                    transition: "all 0.2s", "&:hover": { background: COLORS.goldLight }
                  }}
                >
                  <CloseIcon sx={{ fontSize: 18, color: COLORS.textPrimary }} />
                </Box>
              </Box>

              {/* Radial Metrics Progress Representation Ring */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, py: 2, mb: 3, backgroundColor: COLORS.bg, borderRadius: "20px", border: "1px dashed rgba(217, 119, 6, 0.2)" }}>
                <Box sx={{ position: "relative", width: 110, height: 110, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="100%" height="100%" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#E5E7EB" strokeWidth="3" />
                    <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={COLORS.goldPrimary} strokeWidth="3.5" strokeDasharray={activeModalData.dashArray} strokeDashoffset="25" strokeLinecap="round" />
                  </svg>
                  <Box sx={{ position: "absolute", textAlign: "center" }}>
                    <Typography sx={{ fontSize: "22px", fontWeight: 800, color: COLORS.textPrimary, lineHeight: 1 }}>{activeModalData.percentage}</Typography>
                    <Typography sx={{ fontSize: "9px", color: COLORS.textSecondary, fontWeight: 600 }}>Daily Value</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: "13px", fontWeight: 700, color: COLORS.goldDark }}>Target Nutrient Density</Typography>
              </Box>

              {/* Unique Key Value Info Split Grid */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Box sx={{ p: 2, borderRadius: "16px", border: `1px solid ${COLORS.borderLight}`, backgroundColor: COLORS.cardBg }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                      <LocalFireDepartmentIcon sx={{ fontSize: 16, color: COLORS.goldPrimary }} />
                      <Typography sx={{ fontSize: "11px", fontWeight: 600, color: COLORS.textSecondary }}>{activeModalData.metric1Label}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "15px", fontWeight: 700, color: COLORS.textPrimary }}>{activeModalData.metric1Value}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ p: 2, borderRadius: "16px", border: `1px solid ${COLORS.borderLight}`, backgroundColor: COLORS.cardBg }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                      <FitnessCenterOutlinedIcon sx={{ fontSize: 15, color: COLORS.goldPrimary }} />
                      <Typography sx={{ fontSize: "11px", fontWeight: 600, color: COLORS.textSecondary }}>{activeModalData.metric2Label}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "15px", fontWeight: 700, color: COLORS.textPrimary }}>{activeModalData.metric2Value}</Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Dynamic Macro Highlights Strip */}
              <Box sx={{ display: "flex", gap: 1, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ flex: 1.4, textAlign: "center", py: 1, borderRadius: "999px", background: COLORS.goldLight, border: `1px solid ${COLORS.borderLight}` }}>
                  <Typography sx={{ fontSize: "11px", fontWeight: 700, color: COLORS.goldDark }}>{activeModalData.proteinTag}</Typography>
                </Box>
                <Box sx={{ flex: 0.8, textAlign: "center", py: 1, borderRadius: "999px", background: COLORS.bg, border: "1px solid #E5E7EB" }}>
                  <Typography sx={{ fontSize: "11px", fontWeight: 600, color: COLORS.textPrimary }}>12g Carbs</Typography>
                </Box>
                <Box sx={{ flex: 0.8, textAlign: "center", py: 1, borderRadius: "999px", background: COLORS.bg, border: "1px solid #E5E7EB" }}>
                  <Typography sx={{ fontSize: "11px", fontWeight: 600, color: COLORS.textPrimary }}>9g Fats</Typography>
                </Box>
              </Box>

            </Box>
          </Fade>
        </Modal>

      </Box>
    </>
  );
}