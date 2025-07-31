
export enum UserRole {
  Coach = 'coach',
  Student = 'student',
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name:string;
  photoUrl: string;
  coachIds?: string[];
  certifications?: string[];
  specialization?: string;
  availabilityStatus?: 'available' | 'busy' | 'unavailable';
}

export interface Session {
    id: string;
    coachId: string;
    studentIds: string[];
    studentNames: string[];
    startTime: Date;
    endTime: Date;
    topic: string;
    status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Activity {
    id: string;
    coachId: string;
    studentId: string;
    studentName: string;
    type: 'new_comment' | 'media_upload' | 'lesson_completion';
    target: string; // e.g., 'Backhand Technique' or 'new video for review'
    timestamp: Date;
}

export interface Notification {
    id: string;
    recipientId: string;
    message: string;
    read: boolean;
    timestamp: Date;
}

export type ContentItemStatus = 'published' | 'draft' | 'scheduled';

export interface BaseContentItem {
  id: string;
  coachId: string;
  title: string;
  description: string;
  mediaUrl: string; // URL for thumbnail
  tags: string[];
  status: ContentItemStatus;
}

export interface Lesson extends BaseContentItem {
  type: 'lesson';
  publishDate?: Date; // for scheduled lessons
}

export interface Drill extends BaseContentItem {
  type: 'drill';
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  focusArea: string;
}

export type ContentItem = Lesson | Drill;

export interface MediaItem {
  id: string;
  uploaderId: string;
  uploaderName: string; 
  type: 'video' | 'image';
  url: string; 
  thumbnailUrl: string;
  timestamp: Date;
  title: string;
  tags: string[];
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderPhotoUrl: string;
  snippet: string;
  timestamp: Date;
  isRead: boolean;
}
