export interface Message {
  /**
   * Format: bigint
   * @description Note:
   * This is a Primary Key.<pk/>
   */
  id: number

  /**
   * Format: timestamp with time zone
   * @default now()
   */

  created_at?: string
  /**
   * Format: text
   * @default
   */

  content?: string
  /** Format: uuid */
  user_id?: string
}
