import { instance } from "@/app/api/api.interceptor";
import { ICategory } from "../types/category.interface";


const CATEGORIES = 'categories'

export const CategoryService = {
  async getAllCategories() {
    return instance<ICategory[]>({
      url: CATEGORIES,
      method: 'GET'
    })
  },

  async getById(id: string | number) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'GET'
    })
  },

  async getBySlug(slug: string) {
    return instance<ICategory>({
      url: `${CATEGORIES}/by-slug/${slug}`,
      method: 'GET'
    })
  },

  async createCategory() {
    return instance<ICategory>({
      url: CATEGORIES,
      method: 'POST'
    })
  },

  async updateCategory(id: string | number, name: string) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'PUT',
      data: { name }
    })
  },

  async deleteCategory(id: string | number) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'DELETE'
    })
  }
};

