"use client";
import { createContext, useContext } from "react";
import useCategories from "@/hooks/useCategories";
import GlobalLoader from "@/components/GlobalLoader";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const { categories, loading, error } = useCategories();

  if (loading) return <GlobalLoader />;
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategoriesContext() {
  return useContext(CategoriesContext);
}
