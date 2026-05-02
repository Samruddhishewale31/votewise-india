import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

// Define meaningful events
export type AnalyticsEventName =
  | 'login_success'
  | 'guest_mode_selected'
  | 'learning_path_selected'
  | 'resources_viewed'
  | 'quiz_started'
  | 'quiz_completed'
  | 'assistant_question_asked'
  | 'accessibility_setting_changed';

/**
 * Tracks a custom event in Firebase Analytics.
 * It degrades gracefully to a no-op if Analytics is not supported or not configured.
 * 
 * @param eventName The name of the event to track
 * @param eventParams Optional parameters to include with the event
 */
export const trackEvent = (eventName: AnalyticsEventName, eventParams?: Record<string, unknown>) => {
  if (!analytics) {
    // Graceful fallback: do nothing if Firebase or Analytics is not configured
    // console.debug(`[Analytics Mock] Event Tracked: ${eventName}`, eventParams);
    return;
  }
  
  try {
    logEvent(analytics, eventName, eventParams);
  } catch (error) {
    console.error(`Failed to track event ${eventName}:`, error);
  }
};
