"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getSearchSuggestions,
  getTrendingSearches,
  type SearchSuggestion,
} from "@/lib/products";

interface EnhancedSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSuggestionClick?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;
  className?: string;
}

export function EnhancedSearch({
  value,
  onChange,
  onSuggestionClick,
  placeholder = "Search products, ingredients, concerns...",
  className = "",
}: EnhancedSearchProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = (query: string) => {
    if (query.trim()) {
      const updated = [
        query,
        ...recentSearches.filter((s) => s !== query),
      ].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem("recentSearches", JSON.stringify(updated));
    }
  };

  // Debounced search suggestions
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (value.trim()) {
      setIsLoading(true);
      debounceTimer.current = setTimeout(() => {
        const newSuggestions = getSearchSuggestions(value, 8);
        setSuggestions(newSuggestions);
        setIsLoading(false);
      }, 150);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [value]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    if (newValue.trim()) {
      setShowSuggestions(true);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    onChange(suggestion.text);
    saveRecentSearch(suggestion.text);
    setShowSuggestions(false);
    if (onSuggestionClick) {
      onSuggestionClick(suggestion);
    }
  };

  // Handle recent search click
  const handleRecentSearchClick = (search: string) => {
    onChange(search);
    setShowSuggestions(false);
  };

  // Handle clear search
  const handleClearSearch = () => {
    onChange("");
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  // Handle key navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowSuggestions(false);
      inputRef.current?.blur();
    } else if (e.key === "Enter" && value.trim()) {
      saveRecentSearch(value);
      setShowSuggestions(false);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const trendingSearches = getTrendingSearches();
  const showTrending = !value.trim() && showSuggestions;
  const showRecent =
    !value.trim() && showSuggestions && recentSearches.length > 0;

  return (
    <div ref={searchContainerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10 glass-subtle border-0"
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Search Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border z-50 max-h-96 overflow-y-auto">
          {isLoading && (
            <div className="px-4 py-3 text-center text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mx-auto"></div>
            </div>
          )}

          {/* Recent Searches */}
          {showRecent && (
            <div className="border-b">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                <Clock className="h-3 w-3" />
                Recent Searches
              </div>
              {recentSearches.map((search, index) => (
                <div
                  key={index}
                  onClick={() => handleRecentSearchClick(search)}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                >
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-sm">{search}</span>
                </div>
              ))}
            </div>
          )}

          {/* Trending Searches */}
          {showTrending && (
            <div className="border-b">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                <TrendingUp className="h-3 w-3" />
                Trending Searches
              </div>
              {trendingSearches.slice(0, 5).map((search, index) => (
                <div
                  key={index}
                  onClick={() => handleRecentSearchClick(search)}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                >
                  <TrendingUp className="h-3 w-3 text-gray-400" />
                  <span className="text-sm">{search}</span>
                </div>
              ))}
            </div>
          )}

          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div>
              {!showTrending && !showRecent && (
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Suggestions
                </div>
              )}
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between border-b last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <Search className="h-3 w-3 text-gray-400" />
                    <span className="text-sm">{suggestion.text}</span>
                    <Badge variant="secondary" className="text-xs">
                      {suggestion.type}
                    </Badge>
                  </div>
                  <span className="text-xs text-gray-400">
                    {suggestion.count} results
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {!isLoading && value.trim() && suggestions.length === 0 && (
            <div className="px-4 py-3 text-center text-gray-500">
              No suggestions found for "{value}"
            </div>
          )}
        </div>
      )}

      {/* Search Results Count */}
      {value.trim() && !showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-1">
          <style jsx>{`
            .search-highlight mark {
              background-color: #fef3c7;
              color: #92400e;
              padding: 1px 2px;
              border-radius: 2px;
              font-weight: 500;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
