<?php

/**
 * @file
 * Contains \Drupal\environment_indicator\Entity\EnvironmentIndicator.
 */

namespace Drupal\environment_indicator\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\Core\Annotation\Translation;

/**
 * Defines a Environment configuration entity.
 *
 * @ConfigEntityType(
 *   id = "environment_indicator",
 *   label = @Translation("Environment Indicator"),
 *   controllers = {
 *     "access" = "Drupal\environment_indicator\EnvironmentIndicatorAccessController",
 *     "list" = "Drupal\environment_indicator\EnvironmentIndicatorListController",
 *     "form" = {
 *       "default" = "Drupal\environment_indicator\EnvironmentIndicatorFormController",
 *       "delete" = "Drupal\environment_indicator\Form\EnvironmentIndicatorDeleteForm"
 *     }
 *   },
 *   admin_permission = "administer environment indicator settings",
 *   config_prefix = "environment",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "weight" = "weight"
 *   },
 *   links = {
 *     "canonical" = "environment_indicator.update",
 *     "edit-form" = "environment_indicator.update",
 *     "delete-form" = "environment_indicator.delete"
 *   }
 * )
 */
class EnvironmentIndicator extends ConfigEntityBase {

  /**
   * The machine-readable ID for the configurable.
   */
  public $id;

public $storage;
  /**
   * The human-readable label for the configurable.
   */
  public $label;

  /**
   * The regular expression to match against the URL.
   */
  public $regexurl;

  /**
   * The color code for the indicator.
   */
  public $color = '#D0D0D0';

  /**
   * Position for the indicator.
   */
  public $position = 'top';

  /**
   * Flag that determines if the indicator is fixed or absolute.
   */
  public $fixed = FALSE;
  
  /**
   * Flag that determines if the indicator is disabled.
   */
  public $disabled = FALSE;
  
  /**
   * The weight of this environment in relation to other vocabularies.
   *
   * @var integer
   */
  public $weight = 0;

   }