"use client";
import Image from "next/image";
import { SearchInput } from "./components/input/search";
import { useEffect, useState } from "react";
import { Badge } from "./components/badge";
import {
  GetCategories,
  GetJokeByCategory,
  GetJokeBySearch,
  GetRandomJoke,
} from "./api/chuck-norris.service";
import { Card } from "./components/card";
import { LanguageSelect } from "./components/select/language";
import useTranslation from "./hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [joke, setJoke] = useState<Joke[] | null>(null);

  const fetchCategories = async () => {
    try {
      const response = await GetCategories();
      setCategories(response);
    } catch (error: any) {
      console.error(error);
    }
  };

  const fetchRandomJoke = async () => {
    try {
      const response = await GetRandomJoke();
      setJoke([response]);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchRandomJoke();
  }, []);

  const fetchJokeByCategory = async (category: string) => {
    try {
      const response = await GetJokeByCategory(category);
      setJoke([response]);
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category);
    fetchJokeByCategory(category);
  };

  const handleSearch = async () => {
    if (!search) {
      return;
    }
    try {
      const response = await GetJokeBySearch(search);
      setJoke(response.result);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-1xl font-semibold mt-4">{t("language-selector")}</h2>
      <LanguageSelect />
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          src="/assets/noris.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex w-100 mt-4 items-center">
        <h1 className="flex items-center text-6xl font-extrabold dark:text-white mt-4">
          Chuck Norris
          <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          {t("subtitle")}
          </span>
        </h1>
      </div>
      <div className="w-full mt-4">
        <SearchInput
          value={search}
          onChange={(value: string) => setSearch(value)}
          onSearch={handleSearch}
          placeholder={t("search-placeholder")}
        />
      </div>
      <h2 className="text-1xl font-semibold mt-4">{t("categories-label")}</h2>
      <div className="flex items-center flex-row w-full sm:w-6/12 mt-4 flex-wrap">
        {categories.map((category) => (
          <Badge
            onClick={() => handleClickCategory(category)}
            key={category}
            text={t(category)}
            active={selectedCategory === category}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {joke?.map((jokeItem) => (
          <Card
            key={jokeItem.id}
            joke={jokeItem}
            col={joke.length > 1 ? 1 : 3}
          />
        ))}
      </div>
    </main>
  );
}
