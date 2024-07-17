"use client";

import { useEffect, useState } from "react";
import { MusicDataItem } from "./main/BestMusic";

type ArtistDataItem = {
  artistName: string;
  artistImage: string;
};

function useArtistFetchData(url: string) {
  const [data, setData] = useState<ArtistDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("JSON Server로 온 데이터:", result);

        setData(result); // 데이터를 상태로 저장
      } catch (error) {
        console.error("fetching ERROR!!:", error);

        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

type CommunityDataItem = {
  id: number;
  titleName: string;
  authorName: string;
  views: number;
};

function useCommunityFetchData(url: string) {
  const [data, setData] = useState<CommunityDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 데이터 요청 시작 시 loading 상태를 true로 설정

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("JSON Server로 온 데이터:", result);

        setData(result); // 데이터를 상태로 저장
      } catch (error) {
        console.error("fetching ERROR!!:", error);

        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
}

// MusicDataItem은 BestMusic 컴포넌트에서 가져옴.
function useMusicDataFetchData(url: string) {
  const [data, setData] = useState<MusicDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("JSON Server로 온 데이터:", result);

        setData(result); // 데이터를 상태로 저장
      } catch (error) {
        console.error("fetching ERROR!!:", error);

        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);


  return { data, loading, error };
}

export { useArtistFetchData, useCommunityFetchData, useMusicDataFetchData };
