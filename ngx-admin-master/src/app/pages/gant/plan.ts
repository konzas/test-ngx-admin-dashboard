export class Plan {
  public resourceId: string;
  public planId: string;
  public planStatusEnum: string;
  public planDateCreate: Date;
  public tasks: Array<Task>;
}

export class Task {
  public id: string;
  public title: string;
  public description: string;
  public status: string;
  public username: string;
  public createDate: Date;
  public updateDate: Date;
  public startDate: Date;
  public finishDate: Date;
  public deadlineDate: Date;
  public requiredTaskIds: Array<string>;
}

//public class ResourcePlanView {
//  public Guid ResourceId { get; set; }
//public Guid PlanId { get; set; }
//public string Username { get; set; }
//public PlanStatusEnum PlanStatusEnum { get; set; }
//public DateTime PlanDateCreate { get; set; }
//public List < TaskPlanView > Tasks { get; set; }
//}

//public class TaskPlanView {
//  public Guid Id { get; set; }
//public string Title { get; set; }
//public string Description { get; set; }
//public TaskStatusEnum Status { get; set; }
//public DateTime CreateDate { get; set; }
//public DateTime UpdateDate { get; set; }
//public DateTime StartDate { get; set; }
//public DateTime FinishDate { get; set; }
//public DateTime DeadlineDate { get; set; }
//public List < Guid > RequiredTaskIds { get; set; }
//}
