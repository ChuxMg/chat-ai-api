import "stream-chat";

declare module "stream-chat" {
  // For user custom data
  interface CustomUserData {
    email?: string; // Or string if it's always required
    // Add other custom user fields if needed
  }

  // For channel custom data
  // Note: The SDK's README example uses `created_by_id` directly in the channel data.
  // If 'name' is also a standard (but missing from base typings) or custom field,
  // it should be defined here.
  interface CustomChannelData {
    name?: string; // Or string if it's always required
    // Add other custom channel fields if needed
  }
}
