import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Preloader from "@/components/Preloader";
import CursorTrail from "@/components/CursorTrail";
import HashScroll from "@/components/HashScroll";
import ContactDialogProvider from "@/components/contact/ContactDialogProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** Anciennes URL de pages → ancres de la page unique, pour ne casser aucun lien. */
const REDIRECTS: Record<string, string> = {
  "/a-propos": "/#a-propos",
  "/expertises": "/#expertises",
  "/methodologie": "/#methodologie",
  "/blog": "/#blog",
  // Sections retirées : les anciens liens ramènent à l'accueil plutôt que
  // vers une ancre qui n'existe plus.
  "/realisations": "/",
  "/carrieres": "/",
  "/contact": "/#contact",
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <CursorTrail />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ContactDialogProvider>
            <HashScroll />
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />

                {Object.entries(REDIRECTS).map(([from, to]) => (
                  <Route key={from} path={from} element={<Navigate to={to} replace />} />
                ))}

                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
            <WhatsAppButton />
          </ContactDialogProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
