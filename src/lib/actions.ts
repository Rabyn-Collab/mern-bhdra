'use server';

import { News } from "@/models/News";
import { connectDb } from "./db";
import { NewsModel } from "@/models/model";
import { revalidatePath } from "next/cache";


export async function getNews() {
  await connectDb();
  try {
    const news = await News.find({});
    return { success: true, data: news };
  } catch (err) {
    return {
      success: false,
      message: 'Failed to get news'
    }
  }
}

export async function addNews(news: NewsModel) {
  await connectDb();
  try {
    await News.create(news);
    revalidatePath('/');
    return {
      success: true,
      message: 'News added successfully'
    }
  } catch (err: any) {
    return {
      success: false,
      message: err.message
    }
  }



}


export async function removeNews(id: string) {
  await connectDb();
  try {
    await News.findByIdAndDelete(id);
    revalidatePath('/');
    return {
      success: true,
      message: 'News removed successfully'
    }
  } catch (err: any) {
    return {
      success: false,
      message: err.message
    }
  }



}