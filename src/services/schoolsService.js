import apiClient from "../api/apiClient";

const CACHE_TTL = 1000 * 60 * 2;
const cache = new Map();

function buildCacheKey({ search = "", page = 1, pageSize = "" }) {
  return `${search}|${page}|${pageSize}`;
}

/**
 * Fetches the list of schools from the API, with built-in caching.
 * @param {Object} options
 * @returns {Promise<Object>}
 */
export async function fetchSchools({ search = "", page = 1, pageSize } = {}) {
  const key = buildCacheKey({ search, page, pageSize });
  const now = Date.now();

  const cached = cache.get(key);
  if (cached && now - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    const params = {};
    if (search) params.search = search;
    if (page) params.page = page;
    if (pageSize) params.page_size = pageSize;

    const url = "/campaign/campaign_school_list/";

    const response = await apiClient.get(url, { params });

    const data = response?.data || { school_list: [] };

    cache.set(key, { timestamp: now, data });

    return data;
  } catch (error) {
    console.error("[fetchSchools] Failed to fetch:", error.message);
    throw error;
  }
}
