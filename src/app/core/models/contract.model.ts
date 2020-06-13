import {Rank} from './ranks';
import {ContractStatus} from './contract-status';

export interface Contract {
  contract_id: number;
  contract_customer: number;
  contract_executor: number;
  contract_name: string;
  contract_reward: number;
  contract_min_level: Rank;
  contract_address: string;
  create_time: string;
  contract_status: ContractStatus;
  contract_description: string;
  comment_contract_request: string;
  comment_closed_contract: string;
}
